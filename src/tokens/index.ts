import { TListToken } from "@/types";
import ethereumMainnetTokens from "./ethereum-mainnet";
import sepoliaTokens from "./sepolia";

const listTokens: TListToken = {
  "1": ethereumMainnetTokens,
  "11155111": sepoliaTokens,
};

export default listTokens;
