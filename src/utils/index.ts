export function truncateString(
  str: string,
  firstCharCount: number = str.length,
  endCharCount: number = 0,
  dotCount: number = 3,
) {
  if (str?.length <= firstCharCount + endCharCount) {
    return str; // No truncation needed
  }

  const firstPortion = str?.slice(0, firstCharCount);
  const endPortion = str?.slice(-endCharCount);
  const dots = ".".repeat(dotCount);

  return `${firstPortion}${dots}${endPortion}`;
}

export const formatChainName = (chainName: string) => {
  switch (chainName) {
    case "LightLink Phoenix Mainnet":
      return "LightLink";
    case "BNB Smart Chain":
      return "BNB Chain";
    case "OP Mainnet":
      return "Optimistic";
    case "Linea Mainnet":
      return "Linea";
    default:
      return chainName;
  }
};

export const formatNumberToken = (value: number, decimals: number = 18) => {
	// return value / 10 ** decimals and add a comma every 3 digits
	const valueInString = (value / 10 ** decimals).toString();
	const [integerPart, decimalPart] = valueInString.split(",");
	const integerPartWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	return decimalPart ? `${integerPartWithCommas},${decimalPart}` : integerPartWithCommas;
};
