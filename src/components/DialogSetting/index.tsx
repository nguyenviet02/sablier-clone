import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogTitle } from 'ui/dialog';
import { Switch } from '../ui/switch';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DialogSetting = ({ isOpen, setIsOpen }: Props) => {
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="p-8 pb-4 border-2 border-[#ffffff14] bg-[#1E212F] rounded-3xl w-full max-w-[500px] h-fit flex flex-col items-start justify-start gap-0 shadowDialog [&>button]:hidden"
      >
        <DialogTitle className="w-full flex-1">
          <header className="w-full flex justify-between items-center pb-8 border-b-2 border-[#2a2e41] shrink-0">
            <h2 className="text-[18px] leading-[26px] font-semibold text-[#e1e4ea] ">Preflight settings</h2>
            <button onClick={closeDialog} className="button-primary text-core-gray font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[20px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
              </svg>
            </button>
          </header>
          <main className="w-full flex-1 py-4 flex justify-between items-center">
            <div className="w-full max-w-[300px] flex flex-col gap-[6px]">
              <p className="text-base font-semibold text-[#c3c9d5]">Connected RPCs</p>
              <p className="text-[14px] text-core-gray font-medium leading-[1.5]">
                By default, the app will use its own RPCs to guarantee high-uptime. You can disable this setting if you want to route traffic through your own RPC, provided by your wallet.
              </p>
            </div>
            <Switch className="h-8 w-[60px] p-1 data-[state=unchecked]:bg-[#14161F] data-[state=checked]:bg-[#424966] border-2 border-core-border  [&>span]:w-[22px] [&>span]:h-[22px] [&>span]:bg-[#3C425D] [&>span]:data-[state=checked]:translate-x-[26px] [&>span]:data-[state=checked]:bg-[#E1E4EA]" />
          </main>
        </DialogTitle>
        <DialogFooter className="w-full min-h-[46px] shrink-0 pt-4 flex gap-4 border-t-2 border-core-border">
          <button onClick={closeDialog} className="button-primary w-full flex items-center gap-2 text-core-gray font-semibold border-2 border-core-border">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-[20px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
            </svg>
            <p>Close</p>
          </button>
          <button className="button-primary w-full text-[#e1e4ea] font-semibold border-2 border-core-border">Save settings</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSetting;
