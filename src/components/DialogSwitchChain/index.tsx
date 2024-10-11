import { TChainId } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from 'ui/dialog';
import { useChainId, useConfig, useSwitchChain } from 'wagmi';
import { formatChainName } from '@/utils';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setSelectedChainName: (selectedChainName: string) => void;
};

const DialogSwitchChain = ({ isOpen, setIsOpen, setSelectedChainName }: Props) => {
  const config = useConfig();
  const { chains, switchChainAsync } = useSwitchChain();
  const chainId = useChainId();

  const [searchText, setSearchText] = useState('');
  const [chainList, setChainList] = useState<typeof chains | null>(chains);

  const closeDialog = () => {
    setIsOpen(false);
  };
  const handleSwitchChain = async (chainId: TChainId) => {
    const res = await switchChainAsync({ chainId });
    if (res?.id) {
      setSelectedChainName(res?.name);
      closeDialog();
    }
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    const filteredChains = chains.filter((chain) => chain.name.toLowerCase().includes(value.toLowerCase()));
    setChainList(filteredChains as unknown as typeof chains);
  };
  useEffect(() => {
    if (chainId) {
      setSelectedChainName(chains.find((chain) => chain.id === chainId)?.name || '');
    }
  }, [chainId]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="p-8 border-2 border-[#ffffff14] bg-[#212433] rounded-3xl w-[500px] h-fit max-h-screen flex flex-col items-start justify-start gap-0 shadowDialog [&>button]:hidden"
      >
        <DialogTitle className="w-full shrink-0">
          <header className="w-full flex justify-between items-center pb-8 border-b border-[#2a2e41] shrink-0">
            <h2 className="text-[18px] leading-[26px] font-semibold text-white ">Switch connected chain</h2>
            <button onClick={closeDialog} className="button-primary text-[#8792ab]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
              </svg>
            </button>
          </header>
        </DialogTitle>
        <main className="w-full h-full pt-4 flex-1 min-h-0 flex flex-col">
          <div className="w-full flex items-center border border-core-border rounded-md pl-3 mb-4 text-[#424966] h-[56px] bg-[#1E212F]">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
            <input
              type="text"
              value={searchText}
              onChange={handleChangeInput}
              className="px-3 w-full flex-1 bg-transparent outline-none text-white placeholder:text-[#424966] placeholder:font-medium"
              placeholder="Search by chain name..."
            />
          </div>
          <p className="text-base text-[#8792ab] font-semibold">Chains ({chains.length})</p>
          <div className="w-full shrink-0 h-[1px] my-4 bg-core-border"></div>
          <div className="w-full flex-1 min-h-0 overflow-y-auto hideScroll">
            <div className="grid grid-cols-2 gap-2">
              {chainList?.map((chain, index) => {
                return (
                  <button
                    onClick={() => handleSwitchChain(chain?.id)}
                    key={chain?.id}
                    className={`group flex relative items-center gap-3 w-full hover:bg-[#e0e8ff1a] border border-core-border p-4  rounded-xl ${chainId === chain?.id ? 'order-[0] bg-[#30354a] active' : 'order-1'}`}
                  >
                    <Image src={`/images/${chain?.name?.toLowerCase()}.png`} alt="icon" width={28} height={28} className="shrink-0" />
                    <p className="text-white font-bold">{formatChainName(chain.name)}</p>
                    <div className="absolute size-4 top-1 right-1 rounded-[4px_6px_4px_100%] bg-[#484f70] hidden group-[.active]:block"></div>
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSwitchChain;
