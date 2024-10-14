import React from 'react';

type Props = {
  className?: string;
};

const ArrowRight = ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
    </svg>
  );
};

export default ArrowRight;
