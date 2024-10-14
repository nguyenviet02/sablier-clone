'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'ui/tooltip';
import DialogConnectWallet from '../DialogConnectWallet';
import { useAccount } from 'wagmi';
import DialogSwitchChain from '../DialogSwitchChain';
import DialogSetting from '../DialogSetting';
import { truncateString } from '@/utils';
import DialogAccountSettings from '../DialogAccountSettings';

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  console.log('☠️ ~ Header ~ pathname:', pathname);
  const router = useRouter();
  const account = useAccount();
  const isAccountConnected = account.status === 'connected';

  const [selectedChainName, setSelectedChainName] = React.useState<string>('');

  const [isOpenDialogConnectWallet, setIsOpenDialogConnectWallet] = React.useState(false);
  const [isOpenDialogSwitchChain, setIsOpenDialogSwitchChain] = React.useState(false);
  const [isOpenDialogSetting, setIsOpenDialogSetting] = React.useState(false);
  const [isOpenDialogAccountSettings, setIsOpenDialogAccountSettings] = React.useState(false);

  const goToAirstreams = () => {
    router.push('/airstreams');
  };
  const goToStreams = () => {
    router.push('/');
  };
  const openConnectWalletDialog = () => {
    setIsOpenDialogConnectWallet(true);
  };
  const openSwitchChainDialog = () => {
    setIsOpenDialogSwitchChain(true);
  };
  const openSettingDialog = () => {
    setIsOpenDialogSetting(true);
  };
  const openAccountSettingsDialog = () => {
    setIsOpenDialogAccountSettings(true);
  };

  return (
    <header className="w-full h-fit">
      <div className="w-full h-[86px] border-b-[2px] border-b-[#262a3b]">
        <TooltipProvider>
          <div className="size-full max-w-[1312px] mx-auto px-4 flex justify-between items-center">
            <div className="relative w-full h-full shrink-0 flex-1">
              <Link href={'/'} className="relative w-[150px] h-full block">
                <Image src="/images/logo.svg" alt="logo" fill priority />
              </Link>
            </div>

            <div className="w-full flex-1 flex justify-end items-center gap-2">
              {isAccountConnected && !account?.isReconnecting && (
                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <button className="size-[46px] button-primary">
                      <div className="relative size-[18px]">
                        <Image src="/icons/download.svg" alt="download" fill className="filter-gray" />
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-white font-medium text-[14px]">Expected streams</p>
                  </TooltipContent>
                </Tooltip>
              )}
              <div className="flex justify-center items-center">
                <button
                  onClick={goToStreams}
                  className={`button-primary streams rounded-none  h-[46px] flex justify-center items-center gap-2 rounded-tl-[6px] rounded-bl-[6px] text-core-gray ${pathname === '/' ? 'selected' : ''}`}
                >
                  <div className="relative size-[18px]">
                    <Image src="/icons/download-circle.svg" alt="icon" fill className={`${pathname === '/' ? 'filter-orange' : 'filter-gray'}`} />
                  </div>
                  <p className="text-base font-bold mx-1">Streams</p>
                </button>
                <button
                  onClick={goToAirstreams}
                  className={`button-primary airstreams rounded-none h-[46px] flex justify-center items-center gap-2 rounded-tr-[6px] rounded-br-[6px] text-core-gray ${pathname === '/airstreams' ? 'selected' : ''}`}
                >
                  <div className="relative size-[18px]">
                    <Image src="/icons/airstream.svg" alt="icon" fill className={`${pathname === '/airstreams' ? 'filter-blue' : 'filter-gray'}`} />
                  </div>
                  <p className="text-base font-bold mx-1">Airstreams</p>
                </button>
              </div>
              {!account?.isReconnecting && (
                <>
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                      <button onClick={openSwitchChainDialog} className="button-primary text-white gap-2">
                        {selectedChainName ? (
                          <div className="relative size-[18px] shrink-0 ">
                            <Image src={`/images/${selectedChainName?.toLowerCase()}.png`} alt="download" fill sizes="auto" />
                          </div>
                        ) : null}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[18px] shrink-0">
                          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white font-medium text-[14px]">Switch chain</p>
                    </TooltipContent>
                  </Tooltip>
                  {isAccountConnected ? (
                    <button onClick={openAccountSettingsDialog} className="button-primary text-[#e1e4ea] font-bold gap-2">
                      <Image src="/icons/avatar.svg" width={18} height={18} alt="Avatar" className="rounded-full" />
                      <p>{truncateString(account?.address, 8, 3)}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[18px]">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        ></path>
                      </svg>
                    </button>
                  ) : (
                    <button onClick={openConnectWalletDialog} className="button-primary text-[#e1e4ea] font-bold gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="shrink-0 size-[18px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        ></path>
                      </svg>
                      <p className="w-fit shrink-0 text-base">Connect now</p>
                    </button>
                  )}
                  {!isAccountConnected && (
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <button onClick={openSettingDialog} className="button-primary text-[#e1e4ea]">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[20px]">
                            <path
                              fillRule="evenodd"
                              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-[#e1e4ea] font-medium text-[14px]">Settings</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </>
              )}
            </div>
          </div>
        </TooltipProvider>
      </div>
      {pathname === '/' && (
        <div className="w-full h-[52px] bg-[#1A1D28] border-b-[2px] border-b-[#262a3b]">
          <div className="size-full max-w-[1312px] mx-auto px-4 flex justify-between items-center relative">
            <button className="button-header-message flex justify-center items-center gap-2 text-[#e1e4ea] font-medium hover:opacity-85">
              <div className="size-8 rounded-lg bg-header-message flex justify-center items-center text-[#e1e4ea]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[18px] ">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  ></path>
                </svg>
              </div>
              <p>Airstreams: Airdrop 100k recipients or more</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[16px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      <DialogConnectWallet isOpen={isOpenDialogConnectWallet} setIsOpen={setIsOpenDialogConnectWallet} />
      <DialogSwitchChain isOpen={isOpenDialogSwitchChain} setIsOpen={setIsOpenDialogSwitchChain} setSelectedChainName={setSelectedChainName} />
      <DialogSetting isOpen={isOpenDialogSetting} setIsOpen={setIsOpenDialogSetting} />
      <DialogAccountSettings isOpen={isOpenDialogAccountSettings} setIsOpen={setIsOpenDialogAccountSettings} />
    </header>
  );
};

export default Header;
