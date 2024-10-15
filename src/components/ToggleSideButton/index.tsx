import CloseIcon from "icons/CloseIcon";
import React from "react";

type Props = {
  isOn: boolean;
  handleToggle: (status: boolean) => void;
};

const ToggleSideButton = ({ isOn, handleToggle }: Props) => {
  return (
    <div className="flex items-center">
      <button
        onClick={() => handleToggle(true)}
        className={`flex h-7 min-w-8 items-center justify-center gap-1 rounded bg-core-background px-[10px] text-[14px] font-bold leading-[18px] text-core-gray ${isOn ? "bg-[#3c425d] text-white" : ""}`}
      >
        On
        {isOn && (
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
              d="m4.5 12.75 6 6 9-13.5"
            ></path>
          </svg>
        )}
      </button>
      <button
        onClick={() => handleToggle(false)}
        className={`flex h-7 min-w-8 items-center justify-center gap-1 rounded bg-core-background px-[10px] text-[14px] font-bold leading-[18px] text-core-gray ${!isOn && "bg-[#3c425d] text-white"}`}
      >
        Off
        {!isOn && <CloseIcon className="size-4" />}
      </button>
    </div>
  );
};

export default ToggleSideButton;
