export function truncateString(str: string, firstCharCount: number = str.length, endCharCount: number = 0, dotCount: number = 3) {
  if (str?.length <= firstCharCount + endCharCount) {
    return str; // No truncation needed
  }

  const firstPortion = str?.slice(0, firstCharCount);
  const endPortion = str?.slice(-endCharCount);
  const dots = '.'.repeat(dotCount);

  return `${firstPortion}${dots}${endPortion}`;
}

export const formatChainName = (chainName: string) => {
  switch (chainName) {
    case 'LightLink Phoenix Mainnet':
      return 'LightLink';
    case 'BNB Smart Chain':
      return 'BNB Chain';
    case 'OP Mainnet':
      return 'Optimistic';
    case 'Linea Mainnet':
      return 'Linea';
    default:
      return chainName
  }
};

