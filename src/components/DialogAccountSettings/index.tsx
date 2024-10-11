import { truncateString } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Dialog, DialogContent, DialogTitle } from 'ui/dialog';
import { useAccount, useDisconnect } from 'wagmi';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DialogAccountSettings = ({ isOpen, setIsOpen }: Props) => {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const closeDialog = () => {
    setIsOpen(false);
  };
  const copyAddress = () => {
    navigator.clipboard.writeText(account?.address as string);
  };
  const disconnectAccount = () => {
    disconnect();
    closeDialog();
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="p-8 border-2 border-[#ffffff14] bg-[#212433] rounded-3xl w-full max-w-[500px] h-fit flex flex-col items-start justify-start gap-0 shadowDialog [&>button]:hidden"
      >
        <DialogTitle className="w-full">
          <header className="w-full flex justify-between items-center pb-8 border-b border-[#2a2e41] shrink-0">
            <h2 className="text-[18px] leading-[26px] font-semibold text-white ">Account settings</h2>
            <button onClick={closeDialog} className="button-primary text-[#8792ab]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
              </svg>
            </button>
          </header>
          <main className="w-full">
            <div className="w-full flex flex-col gap-6 py-6">
              <div className="flex items-center gap-1 text-core-gray">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[18px]">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  ></path>
                </svg>
                <h3 className="text-base">Account</h3>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Your address: {truncateString(account?.address as string, 10, 6)}</p>
                <button onClick={copyAddress} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                  Copy
                  <Image src="/icons/avatar.svg" alt="copy" width={16} height={16} className="rounded-full" />
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-full bg-[#ffffff14]"></div>

            <div className="w-full flex flex-col gap-6 py-6">
              <div className="flex items-center gap-1 text-core-gray">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[18px]">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  ></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                </svg>
                <h3 className="text-base">Settings</h3>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Expected streams</p>
                <button onClick={copyAddress} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                  Check
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[16px]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Manage cookies</p>
                <button onClick={copyAddress} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                  Manage
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[16px]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-full bg-[#ffffff14]"></div>

            <div className="w-full flex flex-col gap-6 py-6">
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Use light theme</p>
                <button
                  onClick={copyAddress}
                  className="button-primary bg-[#14161F] h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#424966] gap-2 !cursor-not-allowed hover:bg-[#14161F]"
                >
                  Coming Soon
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Request a feature</p>
                <button onClick={copyAddress} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                  Request
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Access the V1 apps</p>
                <button onClick={copyAddress} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                  Go to v1
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Find out more</p>
                <div className="flex items-center gap-2">
                  <button onClick={copyAddress} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                    Website
                  </button>
                  <button onClick={copyAddress} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                    Links
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#c3c9d5]">Log out from Sablier</p>
                <button onClick={disconnectAccount} className="button-primary h-8 py-[6px] flex justify-center items-center font-bold text-[14px] text-[#e1e4ea] gap-2">
                  Disconnect
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[18px]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </main>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAccountSettings;
