import React from 'react';

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return <div className={`h-[2px] w-full bg-[#ffffff14] ${className}`}></div>;
};

export default Divider;
