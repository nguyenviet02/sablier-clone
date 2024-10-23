"use client";

import ProcessCircle from "@/components/ProcessCircle";
import React, { use, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import ArrowUp from "icons/ArrowUp";
import SaveIcon from "icons/SaveIcon";
import DetailIcon from "icons/DetailIcon";
import DoubleArrowRight from "icons/DoubleArrowRight";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import ArrowRight from "icons/ArrowRight";
import ArrowLeft from "icons/ArrowLeft";
import { Checkbox } from "@/components/ui/checkbox";
import { CopyIcon } from "@radix-ui/react-icons";
import Divider from "@/components/Divider";
import { formatNumberToken, truncateString } from "@/utils";
import { Progress } from "@/components/ui/progress";
import { useGetStream_ByIdLazyQuery } from "@/lib/graphql/graphql";
import { Stream } from "@/lib/graphql/generated/types";
import { useSwitchChain } from "wagmi";
import listTokens from "@/tokens";
import { TDataToken } from "@/types";
import Loading from "@/components/common/Loading";

type Props = {};

const DetailStream = (props: Props) => {
  const params = useParams();
  const { chains } = useSwitchChain();

  const [streamedPercent, setStreamedPercent] = useState(0);
  const [withDrawnPercent, setWithDrawnPercent] = useState(0);
  const [streamToken, setStreamToken] = useState<TDataToken | null>(null);

  const [callDataStreamQuery, dataStreamQuery] = useGetStream_ByIdLazyQuery();

  const currentChain = useMemo(() => {
    return chains.find(
      (chain) =>
        chain?.id?.toString() === dataStreamQuery?.data?.stream?.chainId,
    );
  }, [dataStreamQuery?.data?.stream?.chainId]);

  useEffect(() => {
    const chainId = dataStreamQuery?.data?.stream?.chainId;
    if (chainId) {
      const listTokensOnChain = listTokens[chainId];
      const currentToken = listTokensOnChain.find((token) => {
        return (
          token?.address?.toLowerCase() ===
          dataStreamQuery?.data?.stream?.asset?.address?.toLowerCase()
        );
      });
      setStreamToken(currentToken!);
    }
  }, [dataStreamQuery?.data]);

  useEffect(() => {
    callDataStreamQuery({
      variables: {
        streamId: params.streamId as string,
      },
    });
  }, [params.streamId]);

  useEffect(() => {
    const withDrawnPercent =
      (Number(dataStreamQuery?.data?.stream?.withdrawnAmount) /
        Number(dataStreamQuery?.data?.stream?.depositAmount)) *
      100;
    setWithDrawnPercent(withDrawnPercent);

    const totalTime =
      Number(dataStreamQuery?.data?.stream?.endTime) -
      Number(dataStreamQuery?.data?.stream?.startTime);
    const now = new Date().getTime() / 1000;
    const streamedPercent =
      ((now - Number(dataStreamQuery?.data?.stream?.startTime)) / totalTime) *
      100;
    if (streamedPercent > 100) {
      setStreamedPercent(100);
      return;
    }
    setStreamedPercent(streamedPercent);
  }, [dataStreamQuery?.data?.stream]);

  useEffect(() => {
    const totalTime =
      Number(dataStreamQuery?.data?.stream?.endTime) -
      Number(dataStreamQuery?.data?.stream?.startTime);
    console.log("☠️ ~ useEffect ~ totalTime:", dataStreamQuery?.data);
    const interval = setInterval(() => {
      const now = new Date().getTime() / 1000;
      const streamedPercent =
        ((now - Number(dataStreamQuery?.data?.stream?.startTime)) / totalTime) *
        100;
      if (streamedPercent > 100) {
        clearInterval(interval);
        setStreamedPercent(100);
        return;
      }
      setStreamedPercent(streamedPercent);
    }, 100);
    return () => clearInterval(interval);
  }, [dataStreamQuery?.data?.stream]);

  return (
    <Loading isLoading={dataStreamQuery?.loading || !dataStreamQuery?.data}>
      <div className="relative flex size-full justify-center">
        {/* Left section */}
        <div className="flex h-full max-h-screen w-full flex-1 flex-col items-center justify-center pt-[84px]">
          <div className="relative size-fit">
            <ProcessCircle
              insidePercent={withDrawnPercent}
              outsidePercent={streamedPercent}
              data={dataStreamQuery?.data?.stream as Stream}
            />
            {/* Info inside circle */}
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-8">
              <Image
                src={streamToken?.logoURI || ""}
                alt="ll3-logo"
                width={42}
                height={42}
              />
              <div className="box-progress-stream flex h-[124px] w-[500px] items-center justify-center rounded-[14px] border-2 border-[#363b54] bg-[#363b5466] backdrop-blur-[7.5px]">
                <p className="font-roboto-mono text-[46pt] font-bold text-white">
                  {((streamedPercent / 100) * 1000)?.toFixed(4)}
                </p>
              </div>
              <p className="text-[13pt] font-bold text-[#e1e4ea]">
                Out of {dataStreamQuery?.data?.stream?.asset?.name}{" "}
                {formatNumberToken(
                  dataStreamQuery?.data?.stream?.depositAmount as number,
                  streamToken?.decimals as number,
                )}
              </p>
            </div>
          </div>
          <button className="mt-8 flex h-9 items-center justify-center gap-[10px] rounded border-2 border-[#363b54] bg-[#363b5433] px-[10px] backdrop-blur-sm">
            <div className="size-4 rounded-full border-2 border-blue-500"></div>
            <div className="size-4 rounded-full border-2 border-core-orange"></div>
            <div className="h-3 w-[2px] bg-white"></div>
            <ArrowUp className="size-4" />
          </button>
          <div className="mt-8 flex w-full items-center justify-center gap-4">
            <button className="flex h-[58px] w-[238px] items-center justify-center gap-3 rounded-md bg-[#ffa700] text-base font-bold text-white">
              Withdraw
              <SaveIcon className="size-4 text-white" />
            </button>
            <button className="flex h-[58px] w-[238px] items-center justify-center gap-3 rounded-md bg-[#2a2e41] text-base font-bold text-white">
              Details
              <DetailIcon className="size-4 text-white" />
            </button>
          </div>
        </div>

        <div className="min-h-screen w-[2px] bg-core-background pt-0"></div>

        {/* Right section */}
        <div className="flex h-full w-[532px] flex-col py-8 pl-8">
          <Breadcrumb>
            <BreadcrumbList className="text-[14px] font-bold leading-[17pt] text-core-gray">
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-core-gray hover:underline"
                  href="/"
                >
                  Streams
                </BreadcrumbLink>
              </BreadcrumbItem>
              <ArrowRight className="size-4" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[10.5pt] font-bold leading-[17pt] text-white">
                  Stream
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="mb-8 mt-4 flex items-center gap-4">
            <button className="button-primary size-[42px] shrink-0 rounded-full bg-[#2A2E41] p-0 text-core-gray">
              <ArrowLeft className="size-5" />
            </button>
            <p className="font-catamaran text-[32px] font-semibold text-white">
              Streams {dataStreamQuery?.data?.stream?.alias}
            </p>
          </div>
          <div className="flex w-full flex-col items-center rounded-lg bg-[#242838] p-6">
            <div className="flex w-full justify-between">
              <p className="text-[18px] font-semibold">Attributes</p>
              <div className="flex items-center gap-2">
                {/* <div className="flex items-center space-x-2">
                  <Checkbox className="flex justify-center border-2 border-core-border bg-[#1e212f] data-[state=checked]:bg-[#266cd9]" />
                  <label
                    htmlFor="terms"
                    className="text-[11pt] font-bold leading-none text-core-gray peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Select
                  </label>
                </div> */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  className="flex items-center justify-center gap-2 text-[11pt] font-bold text-core-gray"
                >
                  <CopyIcon />
                  <p>Share Link</p>
                </button>
              </div>
            </div>
            <Divider className="my-6" />
            <div className="flex w-full items-center gap-2">
              <button className="button-primary w-full flex-1 gap-2 bg-[#2a2e41] font-bold">
                <Image
                  src="/icons/avatar.svg"
                  width={18}
                  height={18}
                  alt="Avatar"
                  className="rounded-full"
                />
                <p>
                  {truncateString(dataStreamQuery?.data?.stream?.sender, 6, 3)}
                </p>
              </button>
              <DoubleArrowRight className="size-4 text-core-gray" />
              <button className="button-primary w-full flex-1 gap-2 bg-[#2a2e41] font-bold">
                <Image
                  src="/icons/avatar.svg"
                  width={18}
                  height={18}
                  alt="Avatar"
                  className="rounded-full"
                />
                <p>
                  {truncateString(
                    dataStreamQuery?.data?.stream?.recipient,
                    6,
                    3,
                  )}
                </p>
              </button>
            </div>
            <Divider className="my-6" />
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6">
              <div className="flex w-full items-center gap-3">
                <div className="flex size-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#1e212f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-6 text-[#3c425d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    ></path>
                  </svg>
                </div>
                <div className="flex w-full flex-col gap-[6px]">
                  <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                    Shape
                  </p>
                  <p className="text-[12pt] font-medium leading-[150%]">
                    Linear Stream
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="flex size-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#1e212f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-6 text-[#3c425d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex w-full flex-col gap-[6px]">
                  <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                    Status
                  </p>
                  <p className="text-[12pt] font-medium leading-[150%]">
                    Settled
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="flex size-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#1e212f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-6 text-[#3c425d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex w-full flex-col gap-[6px]">
                  <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                    Expected Payout
                  </p>
                  <p className="flex items-center gap-1 text-[12pt] font-medium leading-[150%]">
                    <Image
                      src={streamToken?.logoURI || ""}
                      width={18}
                      height={18}
                      alt="image"
                      className="mr-1 shrink-0"
                    />
                    {dataStreamQuery?.data?.stream?.asset?.name}{" "}
                    {formatNumberToken(
                      dataStreamQuery?.data?.stream?.depositAmount as number,
                      streamToken?.decimals as number,
                    )}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="flex size-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#1e212f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-6 text-[#3c425d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                    ></path>
                  </svg>
                </div>
                <div className="flex w-full flex-col gap-[6px]">
                  <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                    Cancelability
                  </p>
                  <p className="text-[12pt] font-medium leading-[150%]">
                    {dataStreamQuery?.data?.stream?.cancelable
                      ? "Cancelable"
                      : "Non-cancelable"}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="flex size-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#1e212f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-6 text-[#3c425d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    ></path>
                  </svg>
                </div>
                <div className="flex w-full flex-col gap-[6px]">
                  <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                    Chain
                  </p>
                  <p className="flex items-center gap-1 text-[12pt] font-medium leading-[150%]">
                    <Image
                      src={`/images/${currentChain?.name?.toLowerCase()}.png`}
                      width={18}
                      height={18}
                      alt="image"
                      className="shrink-0"
                    />
                    {currentChain?.name}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="flex size-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#1e212f]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="size-6 text-[#3c425d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex w-full flex-col gap-[6px]">
                  <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                    Started on
                  </p>
                  <p className="text-[12pt] font-medium leading-[150%]">
                    {new Date(
                      Number(dataStreamQuery?.data?.stream?.startTime) * 1000,
                    ).toLocaleString("fr-FR")}
                  </p>
                </div>
              </div>
            </div>
            <Divider className="my-6" />
            <div className="grid w-full grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                  Streamed amount
                </p>
                <div className="flex items-center gap-2 rounded bg-[#212433] p-[10px]">
                  <Progress
                    value={streamedPercent}
                    className="h-[6px] overflow-hidden bg-[#c3c9d5] [&>div]:bg-[#266cd9]"
                  />
                  <p className="font-bold">{Math.floor(streamedPercent)}%</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[12pt] font-semibold leading-[16pt] text-core-gray">
                  Withdrawn amount
                </p>
                <div className="flex items-center gap-2 rounded bg-[#212433] p-[10px]">
                  <Progress
                    value={withDrawnPercent || 0}
                    className="h-[6px] overflow-hidden bg-[#c3c9d5] [&>div]:bg-[#ff9c00]"
                  />
                  <p className="font-bold">
                    {Math.floor(withDrawnPercent || 0)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default DetailStream;
