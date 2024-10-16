import Logo from "icons/Logo";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "ui/dialog";
import Divider from "../Divider";
import { useChainId, useReadContract, useSwitchChain } from "wagmi";
import listTokens from "@/tokens";
import { TDataToken } from "@/types";
import { truncateString } from "@/utils";
import { erc20Abi } from "viem";
import Link from "next/link";
import PlusIcon from "icons/PlusIcon";
import SettingIcon from "icons/SettingIcon";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DialogChooseToken = ({ isOpen, setIsOpen }: Props) => {
  const { chains } = useSwitchChain();
  const [searchText, setSearchText] = useState("");
  const [listTokensOnChain, setListTokensOnChain] = useState<TDataToken[]>([]);

  const chainId = useChainId();
  const currentChain = chains.find((chain) => chain?.id === chainId);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  useEffect(() => {
    if (chainId) {
      const listTokensOnChain = listTokens[chainId];
      setListTokensOnChain(listTokensOnChain);
    }
  }, [chainId]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="shadowDialog flex h-fit max-h-[80vh] w-full max-w-[600px] flex-col items-start justify-start gap-0 rounded-3xl border-2 border-[#ffffff14] bg-[#212433] p-8 pb-0 [&>button]:hidden"
      >
        <DialogTitle className="flex w-full items-center justify-between">
          <p className="text-[18px] font-semibold">Choose token</p>
          <div className="flex items-center justify-center gap-2">
            <Logo className="h-[18px] w-[14px]" />
            <p className="flex items-center gap-2 font-semibold text-[#ffb800]">
              Community list{" "}
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </p>
          </div>
        </DialogTitle>
        <Divider className="mb-4 mt-8 w-full" />
        <div className="mb-4 flex h-[56px] w-full items-center rounded-md border border-core-border bg-[#1E212F] pl-3 text-[#424966]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
          <input
            type="text"
            value={searchText}
            onChange={handleChangeInput}
            className="w-full flex-1 bg-transparent px-3 text-white outline-none placeholder:font-medium placeholder:text-[#424966]"
            placeholder="Name, symbol or paste address..."
          />
        </div>
        <p className="text-[16px] font-medium text-core-gray">
          Token ({listTokensOnChain?.length}) on {currentChain?.name}
        </p>
        <Divider className="mt-4 w-full" />
        <div className="mt-1 min-h-0 w-full flex-1 overflow-y-auto">
          {listTokensOnChain?.map((token: TDataToken) => {
            return (
              <button
                key={token?.address}
                className="group flex h-[64px] w-full items-center justify-between gap-2 rounded-lg px-2 hover:bg-[#2a2e41]"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={token?.logoURI}
                    alt="Image"
                    width={32}
                    height={32}
                  />
                  <div className="flex w-full flex-col items-start">
                    <p className="text-[16px] font-semibold">{token?.symbol}</p>
                    <Link
                      href={`${currentChain?.blockExplorers?.default?.url}/token/${token?.address}`}
                      className="text-[14px] font-semibold text-core-gray hover:underline"
                    >
                      {token?.name}
                    </Link>
                  </div>
                </div>
                <p className="hidden text-[14px] font-semibold text-[#4e5679] group-hover:block">
                  {truncateString(token?.address, 6, 4)}
                </p>
              </button>
            );
          })}
        </div>
        <Divider className="w-full" />
        <div className="flex h-[66px] w-full items-center justify-between py-4">
          <p className="text-[14px] text-core-gray">v1.0.0</p>
          <div className="flex flex-1 items-center justify-end gap-3">
            <button className="button-primary flex h-8 items-center gap-1 border border-core-border text-[14px] font-bold">
              Other tokens
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </button>
            <button className="button-primary flex gap-1 h-8 border border-core-border text-[14px] font-bold">
              List yours
              <PlusIcon className="size-4" />
            </button>
            <button className="button-primary flex gap-1 h-8 border border-core-border text-[14px] font-bold">
              Manage
              <SettingIcon className="size-4" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogChooseToken;
