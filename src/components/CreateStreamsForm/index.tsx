import { useSearchParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import Divider from "../Divider";
import Linear from "shapes/Linear";
import LockIcon from "icons/Lock";
import { v4 } from "uuid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import InfoIcon from "icons/InfoIcon";
import ToggleSideButton from "../ToggleSideButton";
import DetailStreamForm from "../DetailStreamForm";
import PlusIcon from "icons/PlusIcon";
import { TStreamGeneralDetail, TDataStream, TDataToken } from "@/types";
import DialogConnectWallet from "../DialogConnectWallet";
import DialogChooseToken from "../DialogChooseToken";
import {
  useWriteContract,
  useReadContract,
  useAccount,
  useWaitForTransactionReceipt,
} from "wagmi";
import { sablierAbi } from "@/abis";
import { erc20Abi } from "viem";

type Props = {};

const CreateStreamsForm = (props: Props) => {
  const searchParams = useSearchParams();
  const selectedShape = searchParams.get("shape");
  const account = useAccount();
  console.log("☠️ ~ CreateStreamsForm ~ account:", account);

  const [isOpenDialogConnectWallet, setIsOpenDialogConnectWallet] =
    React.useState(false);
  const [isOpenDialogChooseToken, setIsOpenDialogChooseToken] =
    React.useState(false);
  const [selectedToken, setSelectedToken] = React.useState<TDataToken | null>(
    null,
  );
  const [hashOfTransaction, setHashOfTransaction] =
    React.useState<`0x${string}`>("0x");
  const [dataGeneralDetails, setDataGeneralDetails] =
    React.useState<TStreamGeneralDetail>({
      shape: "",
      token: "",
      isCancelable: false,
      isTransferable: false,
    });
  const [dataStreams, setDataStreams] = React.useState<TDataStream[]>([
    {
      id: v4(),
      amount: 0,
      recipient: "",
      duration: "",
    },
  ]);

  const totalAmount = useMemo(() => {
    return dataStreams.reduce((acc, stream) => {
      return acc + Number(stream?.amount || 0);
    }, 0);
  }, [dataStreams]);

  const handleSetCancelable = (state: boolean) => {
    setDataGeneralDetails((prev) => ({
      ...prev,
      isCancelable: state,
    }));
  };

  const handleSetTransferable = (state: boolean) => {
    setDataGeneralDetails((prev) => ({
      ...prev,
      isTransferable: state,
    }));
  };

  const addNewStream = () => {
    setDataStreams((prev) => [
      ...prev,
      {
        id: v4(),
        amount: 0,
        recipient: "",
        duration: "",
      },
    ]);
  };

  const openDialogConnectWallet = () => {
    setIsOpenDialogConnectWallet(true);
  };

  const openDialogChooseToken = () => {
    setIsOpenDialogChooseToken(true);
  };

  const resultTest = useWaitForTransactionReceipt({
    hash: hashOfTransaction,
  });

  const { writeContractAsync: writeContractSpendTokenAsync } =
    useWriteContract();

  const allowSpendToken = async () => {
    try {
      const res = await writeContractSpendTokenAsync({
        abi: erc20Abi,
        address: selectedToken?.address!,
        functionName: "approve",
        args: [
          "0x14fcd1d4223621976c7594DA3d2bE3d5033c81E7", // Address of third party
          BigInt(totalAmount * 10 ** selectedToken?.decimals!), // Amount of token
        ],
      });
      if (res) {
        setHashOfTransaction(res);
      }
    } catch (error) {}
  };

  const { data: allowanceAmount, refetch: refetchAllowanceAmount } =
    useReadContract({
      abi: erc20Abi,
      functionName: "allowance",
      address: selectedToken?.address, //Address of token
      args: [
        account?.address!, //Address of owner
        "0x14fcd1d4223621976c7594DA3d2bE3d5033c81E7", //Address of third party
      ],
    });

  const { writeContractAsync: writeContractCreateStreamsAsync } =
    useWriteContract();
  const createStreams = async () => {
    const res = await writeContractCreateStreamsAsync({
      abi: sablierAbi,
      address: "0x14fcd1d4223621976c7594DA3d2bE3d5033c81E7", // Address of contracts
      functionName: "createWithDurationsLL",
      args: [
        "0xCa60c92B4380a5B1a1147340C35233632229eE9d", // Address of lockuplinear
        selectedToken?.address!, // Address of token
        [
          {
            sender: account?.address!,
            recipient: "0x6766Ea9fCBD356Cf6B576307dcf05bC1dEb7Ad30",
            totalAmount: BigInt(totalAmount * 10 ** selectedToken?.decimals!),
            cancelable: true,
            transferable: true,
            durations: { total: 1000000, cliff: 0 },
            broker: {
              account: "0x0000000000000000000000000000000000000000",
              fee: BigInt(0),
            },
          },
        ],
      ],
    });
  };

  const isNeedApprove = useMemo(() => {
    if (!selectedToken) return false;
    if (!totalAmount) return false;
    if (!allowanceAmount) return true;
    return (
      parseInt(allowanceAmount?.toString()) / 10 ** selectedToken?.decimals <
      totalAmount
    );
  }, [selectedToken, totalAmount, allowanceAmount]);

  useEffect(() => {
    refetchAllowanceAmount();
  }, [resultTest?.data]);

  return (
    <TooltipProvider>
      <div className="flex gap-8 pb-8">
        <div className="flex w-full flex-1 flex-col gap-8">
          {/* General Details */}
          <div className="w-full flex-1 rounded-xl bg-core-background p-6">
            <div className="flex w-full items-center justify-between pb-6">
              <h2 className="text-[18px] font-semibold text-[#e1e4ea]">
                General Details
              </h2>
              <button className="flex items-center justify-center gap-[2px] text-[15px] font-bold text-core-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  ></path>
                </svg>
                Guide
              </button>
            </div>
            <Divider />
            <div className="grid w-full grid-cols-2 gap-6 pt-6">
              {/* Shape */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] font-semibold text-core-gray">
                  Shape
                </h3>
                <div className="flex h-[56px] items-center justify-between rounded-md border-2 border-[#1a1d28] bg-core-background px-3">
                  <div className="flex gap-2">
                    <Linear className="h-[28px] w-[80px]" />
                    <p className="text-base font-semibold text-core-gray">
                      Linear Stream
                    </p>
                  </div>
                  <LockIcon className="size-5 text-core-gray" />
                </div>
              </div>

              {/* Token */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] font-semibold text-core-gray">
                  Token
                </h3>
                <button
                  onClick={openDialogChooseToken}
                  className="flex h-[56px] items-center justify-between rounded-md border-2 border-transparent bg-core-background-secondary px-3 hover:border-core-border"
                >
                  <div className="flex items-center gap-3">
                    {selectedToken?.address ? (
                      <>
                        <Image
                          src={selectedToken?.logoURI}
                          alt="Image"
                          width={32}
                          height={32}
                        />
                        <p className="text-base font-semibold text-white">
                          {selectedToken?.name}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="size-[26px] rounded-full bg-core-background"></div>
                        <p className="text-base font-semibold text-[#474E6D]">
                          Choose a token from the list...
                        </p>
                      </>
                    )}
                  </div>
                  <div className="flex h-8 w-fit min-w-8 items-center justify-center rounded-sm bg-core-background px-3 text-[14px] font-semibold text-core-gray hover:bg-[#2e3348]">
                    Choose
                  </div>
                </button>
              </div>

              {/* Make the stream cancelable?
               */}
              <div className="flex flex-col gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h3 className="flex w-fit items-center gap-1 text-[16px] font-semibold text-core-gray">
                      Make the stream cancelable?
                      <InfoIcon className="size-4" />
                    </h3>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] rounded-[10px] bg-[#363b54] p-3">
                    <p className="text-[14px] font-medium leading-[18px] text-white">
                      Making the stream non-cancelable means you won't be able
                      to stop the stream later on; funds are guaranteed to
                      eventually stream to the recipient. Conversely, with
                      cancelable streams, you can recover all unstreamed funds.
                    </p>
                  </TooltipContent>
                </Tooltip>
                <div
                  onClick={() =>
                    handleSetCancelable(!dataGeneralDetails.isCancelable)
                  }
                  className="flex h-[56px] cursor-pointer items-center justify-between rounded-md border-2 border-transparent bg-core-background-secondary px-3 hover:border-core-border"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-base font-semibold text-white">
                      Cancelbility (
                      {dataGeneralDetails.isCancelable ? "On" : "Off"})
                    </p>
                  </div>
                  <ToggleSideButton
                    isOn={dataGeneralDetails.isCancelable}
                    handleToggle={handleSetCancelable}
                  />
                </div>
              </div>

              {/* Make the stream transferable?
               */}
              <div className="flex flex-col gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <h3 className="flex w-fit items-center gap-1 text-[16px] font-semibold text-core-gray">
                      Make the stream transferable?
                      <InfoIcon className="size-4" />
                    </h3>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] rounded-[10px] bg-[#363b54] p-3">
                    <p className="text-[14px] font-medium leading-[18px] text-white">
                      You can choose to make the stream non-transferable. This
                      means the recipient will not be able to transfer or sell
                      the stream later on.
                    </p>
                  </TooltipContent>
                </Tooltip>
                <div
                  onClick={() =>
                    handleSetTransferable(!dataGeneralDetails.isTransferable)
                  }
                  className="flex h-[56px] cursor-pointer items-center justify-between rounded-md border-2 border-transparent bg-core-background-secondary px-3 hover:border-core-border"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-base font-semibold text-white">
                      Transferability (
                      {dataGeneralDetails.isTransferable ? "On" : "Off"})
                    </p>
                  </div>
                  <ToggleSideButton
                    isOn={dataGeneralDetails.isTransferable}
                    handleToggle={handleSetTransferable}
                  />
                </div>
              </div>
            </div>
          </div>

          {dataStreams?.map((stream, index) => {
            return (
              <DetailStreamForm
                key={stream.id}
                dataDetail={stream}
                dataStreams={dataStreams}
                setDataStreams={setDataStreams}
              />
            );
          })}

          <button
            onClick={addNewStream}
            className="flex items-center justify-center gap-4 text-base font-bold text-core-gray opacity-80 hover:opacity-100"
          >
            <div className="flex size-[54px] items-center justify-center rounded-[16px] border-2 border-[#6a7795]">
              <PlusIcon className="size-[18px]" />
            </div>
            <p>Add new stream</p>
          </button>
        </div>
        <div className="w-[400px] shrink-0">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-[18px] font-semibold text-white">Summary</h3>
            <div className="flex items-center gap-2 text-[14px] font-bold text-core-gray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                ></path>
              </svg>
              Free to use
            </div>
          </div>
          <div className="mb-6 flex w-full flex-col gap-4 rounded-lg bg-core-background p-6">
            <div className="flex w-full items-center justify-between">
              <p className="text-[16px] font-medium text-white">Chain</p>
              <div className="flex items-center gap-1 text-[16px] font-medium text-white">
                <Image
                  src={"/images/ethereum.png"}
                  alt="chain logo"
                  width={20}
                  height={20}
                  className="h-5 w-auto shrink-0"
                />
                Sepolia
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[16px] font-medium text-white">
                Cancelability
              </p>
              <div className="flex items-center gap-1 text-[16px] font-medium text-white">
                {dataGeneralDetails.isCancelable
                  ? "Yes, will be cancelable"
                  : "No, won't be cancelable"}
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[16px] font-medium text-white">
                Transferability
              </p>
              <div className="flex items-center gap-1 text-[16px] font-medium text-white">
                {dataGeneralDetails.isTransferable
                  ? "Yes, will be transferable"
                  : "No, won't be transferable"}
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[16px] font-medium text-white">Token</p>
              <Image
                src={"/images/ethereum.png"}
                alt="chain logo"
                width={20}
                height={20}
                className="h-5 w-auto shrink-0"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[16px] font-medium text-white">Calldata</p>
              <p className="text-[14px] font-medium text-core-gray">
                Preview Calldata
              </p>
            </div>
          </div>
          <div className="mb-6 flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-[16px] font-semibold text-[#e1e4ea]">
                Total
              </h3>
              <p className="flex items-center gap-1 text-[14px] font-medium text-core-gray">
                Excluding gas
                <InfoIcon className="size-4" />
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/ethereum.png"
                alt="chain logo"
                width={20}
                height={20}
                className="h-5 w-auto shrink-0"
              />
              <p className="text-[18px] font-bold text-white">
                {totalAmount || 0}
              </p>
            </div>
          </div>
          {!account?.isConnected && (
            <div className="mb-6 flex w-full flex-col gap-6 rounded-lg bg-core-background p-6 text-[#ffb800]">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></path>
                </svg>
                <p className="font-semibold leading-[16pt]">
                  Wallet connection required
                </p>
              </div>
              <p className="font-medium leading-[150%]">
                You need to connect your account first. Check the top right
                corner or click below to link your wallet.
              </p>

              <button
                onClick={openDialogConnectWallet}
                className="min-h-8 w-fit rounded-md border-2 border-[#ffb800] px-[6px] text-[11pt] font-bold hover:bg-core-background-secondary"
              >
                Required: Connect
              </button>
            </div>
          )}
          {isNeedApprove && (
            <div className="mb-6 flex w-full flex-col gap-6 rounded-lg bg-core-background p-6">
              <p className="text-[14px] text-core-gray">
                Approve Sablier to spend your {selectedToken?.symbol} tokens and
                create the group of streams.
              </p>
              <button
                onClick={allowSpendToken}
                className="btn-create-streams flex h-[46px] w-full items-center justify-center rounded-lg bg-white font-bold text-black"
              >
                Allow
              </button>
            </div>
          )}
          <button
            onClick={createStreams}
            className="btn-create-streams flex h-[46px] w-full items-center justify-center rounded-lg font-bold text-white"
          >
            Create Streams
          </button>
        </div>
      </div>
      <DialogConnectWallet
        isOpen={isOpenDialogConnectWallet}
        setIsOpen={setIsOpenDialogConnectWallet}
      />
      <DialogChooseToken
        isOpen={isOpenDialogChooseToken}
        setIsOpen={setIsOpenDialogChooseToken}
        setSelectedToken={setSelectedToken}
      />
    </TooltipProvider>
  );
};

export default CreateStreamsForm;
