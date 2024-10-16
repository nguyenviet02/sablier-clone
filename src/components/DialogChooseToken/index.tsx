import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "ui/dialog";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DialogChooseToken = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="shadowDialog flex h-fit w-full max-w-[500px] flex-col items-start justify-start gap-0 rounded-3xl border-2 border-[#ffffff14] bg-[#212433] p-8 [&>button]:hidden"
      >
        <header className="flex items-center justify-between w-full">
          <h2 className="text-[18px] font-semibold">
            Choose token
          </h2>
          <div className="flex">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={14}
              height={18}
              className="filter-orange"
            />
            <p className="">Community list</p>
          </div>
        </header>
      </DialogContent>
    </Dialog>
  );
};

export default DialogChooseToken;
