export type TChainId =
  | 1
  | 11155111
  | 56
  | 42161
  | 43114
  | 8453
  | 81457
  | 100
  | 4689
  | 1890
  | 59144
  | 10
  | 137
  | 534352;

export type TStreamGeneralDetail = {
  shape: string;
  token: string;
  isCancelable: boolean;
  isTransferable: boolean;
};

export type TDataStream = {
  id: string;
  amount: number | null;
  recipient: string;
  duration: string;
};
