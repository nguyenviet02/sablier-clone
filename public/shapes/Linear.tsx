import React from 'react';

type Props = {
  className?: string;
};

const Linear = ({ className }: Props) => {
  return (
    <svg viewBox="0 0 80 28" width="80" height="28" preserveAspectRatio="xMidYMid meet" vectorEffect="non-scaling-stroke" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient gradientTransform="rotate(90)" id="gradient-thumbnail">
          <stop offset="0%" stopColor="rgba(255,156,0,0.25)" />
          <stop offset="100%" stopColor="rgba(255,156,0,0.01)" />
        </linearGradient>
      </defs>
      <path
        d="M 1 27 L 79 1"
        preserveAspectRatio="xMidYMid meet"
        vectorEffect="non-scaling-stroke"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="#ff9c00"
      ></path>
      <path d="M 0 28 L 80 0 L 80 28 Z" preserveAspectRatio="xMidYMid meet" vectorEffect="non-scaling-stroke" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="url(#gradient-thumbnail)"></path>
    </svg>
  );
};

export default Linear;
