import React from 'react';

type Props = {
  className?: string;
};

const ArrowLeft = ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
    </svg>
  );
};

export default ArrowLeft;
