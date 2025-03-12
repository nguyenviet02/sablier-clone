import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "ui/dialog";
import { useAccount, useDisconnect } from "wagmi";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DialogDatePicker = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="shadowDialog flex h-fit w-full max-w-[500px] flex-col items-start justify-start gap-0 rounded-3xl border-2 border-[#ffffff14] bg-[#212433] p-8 [&>button]:hidden"
      >
        <div>12 hours</div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDatePicker;
