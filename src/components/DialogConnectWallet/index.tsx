import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from 'ui/dialog';
import { Connector as TConnecter, CreateConnectorFn as TCreateConnectorFn, useConnect } from 'wagmi';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DialogConnectWallet = ({ isOpen, setIsOpen }: Props) => {
  const { connectors, connect, status, error } = useConnect();
  const [selectedConnector, setSelectedConnector] = React.useState<TConnecter | null>(null);

  const closeDialog = () => {
    setSelectedConnector(null);
    setIsOpen(false);
  };

  const renderRightSection = useCallback(() => {
    if (!selectedConnector || status == 'idle') {
      return (
        <div className="flex-1 size-full flex flex-col items-center justify-around">
          <h2 className="text-lg font-extrabold text-white">What is a Wallet?</h2>
          <div className="w-full max-w-[312px] flex flex-col gap-8">
            <div className="flex gap-4 items-center w-full">
              <Image src={'/images/wallet-1.svg'} alt="Image" width={48} height={48} className="shrink-0" />
              <div className="flex flex-col text-[14px] leading-[18px]">
                <p className="font-bold text-white">A Home for your Digital Assets</p>
                <p className="text-[#fff9] font-medium">Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center w-full">
              <Image src={'/images/wallet-1.svg'} alt="Image" width={48} height={48} className="shrink-0" />
              <div className="flex flex-col text-[14px] leading-[18px]">
                <p className="font-bold text-white">A Home for your Digital Assets</p>
                <p className="text-[#fff9] font-medium">Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
              </div>
            </div>
          </div>
          <div className="w-full border border-[#ffffff0d] rounded-lg p-3">
            <p className="text-[13px] text-[#c3c9d5] font-medium leading-[140%]">
              By connecting your wallet, creating a stream, or using our website to view streams or documentation, you confirm that you have read and understand our{' '}
              <Link href={'/'} className="text-[#ffb800] underline">
                Risk Notice
              </Link>{' '}
              and{' '}
              <Link href={'/'} className="text-[#ffb800] underline">
                Privacy Policy
              </Link>{' '}
              and that you agree to our{' '}
              <Link href={'/'} className="text-[#ffb800] underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      );
    }
    if (selectedConnector && (status === 'pending' || status === 'error')) {
      return (
        <div className="size-full flex flex-col justify-center items-center pb-8">
          <Image src={selectedConnector?.icon || ''} width={44} height={44} alt="Image" className="mb-2" />
          <h2 className="text-white text-[18px] font-bold">Opening {selectedConnector?.name}...</h2>
          <p className="text-[#fff9] text-[14px] font-medium mb-2">Confirm connection in the extension</p>
          {status === 'error' ? (
            <button
              onClick={() => connect({ connector: selectedConnector as TConnecter })}
              className="h-7 flex justify-center items-center px-3 py-1 border border-[#ffffff0a] rounded-full bg-[#3898FF] text-white text-[14px] font-bold "
            >
              RETRY
            </button>
          ) : (
            <div className="loadingAnimation size-6 border-[3px]"></div>
          )}
        </div>
      );
    }
    if (status === 'success') {
      closeDialog();
    }
  }, [selectedConnector, status]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="py-4 px-0 border-2 border-[#ffffff14] bg-[#1A1B1F] rounded-3xl min-w-[720px] h-[504px] flex items-start justify-start gap-0 shadowDialog [&>button]:hidden"
      >
        <DialogTitle></DialogTitle>
        {/* Left */}
        <div className="flex flex-col min-w-[287px] px-4">
          <h2 className="text-[18px] leading-6 text-white font-extrabold mb-6">Connect a Wallet</h2>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector });
                setSelectedConnector(connector);
              }}
              type="button"
              className="flex items-center gap-3 w-full hover:bg-[#e0e8ff1a] border border-transparent p-[5px] rounded-xl"
            >
              <Image src={connector?.icon || ''} alt="icon" width={28} height={28} />
              <p className="text-white font-bold">{connector.name}</p>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-full bg-[#ffffff14]"></div>

        {/* Right */}
        <div className="size-full flex flex-col items-center flex-1 w-full px-4">
          <div className="w-full flex justify-end mb-3 shrink-0 h-fit">
            <button onClick={closeDialog} className="size-7 rounded-full flex justify-center items-center bg-[#2C2D31] text-[#e0e8ff99] hover:scale-110 ease-linear place-items-end">
              <svg aria-hidden="true" fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
                <title>Close</title>
                <path
                  d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          {renderRightSection()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogConnectWallet;
