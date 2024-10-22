/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /** 8 bytes signed integer */
  Int8: { input: any; output: any; }
  /** A string representation of microseconds UNIX timestamp (16 digits) */
  Timestamp: { input: any; output: any; }
};

export type Action = {
  __typename?: 'Action';
  /** address of an actor, differs based on action type e.g. for Create it resolves to the sender */
  addressA?: Maybe<Scalars['Bytes']['output']>;
  /** address of an actor, differs based on action type e.g. for Transfer it resolves to the new recipient */
  addressB?: Maybe<Scalars['Bytes']['output']>;
  /** amount, differs based on action type e.g. for Deposit it resolves to the depositAmount */
  amountA?: Maybe<Scalars['BigInt']['output']>;
  /** amount, differs based on action type e.g. for Withdraw it resolves to the refundedAmount */
  amountB?: Maybe<Scalars['BigInt']['output']>;
  /** transaction details: block number */
  block: Scalars['BigInt']['output'];
  /** category of action e.g. Deposit or Withdraw */
  category: ActionCategory;
  /** hardcoded chain id */
  chainId: Scalars['BigInt']['output'];
  /** contract through which the stream actions has been triggered */
  contract: Contract;
  /** address that triggered the transaction */
  from: Scalars['Bytes']['output'];
  /** transaction details: hash */
  hash: Scalars['Bytes']['output'];
  /** unique identifier resolving to transaction hash concatenated with the log index (there may be multiple actions per tx) */
  id: Scalars['ID']['output'];
  /** stream linked to this action (or null if this is a contract level action) */
  stream?: Maybe<Stream>;
  /** unique global id tracked by the subgraph watcher */
  subgraphId: Scalars['BigInt']['output'];
  /** transaction details: timestamp */
  timestamp: Scalars['BigInt']['output'];
};

export enum ActionCategory {
  Approval = 'Approval',
  ApprovalForAll = 'ApprovalForAll',
  Cancel = 'Cancel',
  Create = 'Create',
  Renounce = 'Renounce',
  Transfer = 'Transfer',
  Withdraw = 'Withdraw'
}

export type Action_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  addressA?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addressA_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_not?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressA_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addressB?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addressB_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_not?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addressB_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amountA?: InputMaybe<Scalars['BigInt']['input']>;
  amountA_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountA_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountA_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountA_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountA_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountA_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountA_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountB?: InputMaybe<Scalars['BigInt']['input']>;
  amountB_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountB_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountB_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountB_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountB_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountB_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountB_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Action_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  category?: InputMaybe<ActionCategory>;
  category_in?: InputMaybe<Array<ActionCategory>>;
  category_not?: InputMaybe<ActionCategory>;
  category_not_in?: InputMaybe<Array<ActionCategory>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Action_Filter>>>;
  stream?: InputMaybe<Scalars['String']['input']>;
  stream_?: InputMaybe<Stream_Filter>;
  stream_contains?: InputMaybe<Scalars['String']['input']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_gt?: InputMaybe<Scalars['String']['input']>;
  stream_gte?: InputMaybe<Scalars['String']['input']>;
  stream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_lt?: InputMaybe<Scalars['String']['input']>;
  stream_lte?: InputMaybe<Scalars['String']['input']>;
  stream_not?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphId?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_not?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Action_OrderBy {
  AddressA = 'addressA',
  AddressB = 'addressB',
  AmountA = 'amountA',
  AmountB = 'amountB',
  Block = 'block',
  Category = 'category',
  ChainId = 'chainId',
  Contract = 'contract',
  ContractAddress = 'contract__address',
  ContractAdmin = 'contract__admin',
  ContractAlias = 'contract__alias',
  ContractCategory = 'contract__category',
  ContractId = 'contract__id',
  ContractVersion = 'contract__version',
  From = 'from',
  Hash = 'hash',
  Id = 'id',
  Stream = 'stream',
  StreamAlias = 'stream__alias',
  StreamBrokerFeeAmount = 'stream__brokerFeeAmount',
  StreamCancelable = 'stream__cancelable',
  StreamCanceled = 'stream__canceled',
  StreamCanceledTime = 'stream__canceledTime',
  StreamCategory = 'stream__category',
  StreamChainId = 'stream__chainId',
  StreamCliff = 'stream__cliff',
  StreamCliffAmount = 'stream__cliffAmount',
  StreamCliffTime = 'stream__cliffTime',
  StreamDepositAmount = 'stream__depositAmount',
  StreamDuration = 'stream__duration',
  StreamEndTime = 'stream__endTime',
  StreamFunder = 'stream__funder',
  StreamHash = 'stream__hash',
  StreamId = 'stream__id',
  StreamIntactAmount = 'stream__intactAmount',
  StreamPosition = 'stream__position',
  StreamProtocolFeeAmount = 'stream__protocolFeeAmount',
  StreamProxender = 'stream__proxender',
  StreamProxied = 'stream__proxied',
  StreamRecipient = 'stream__recipient',
  StreamRenounceTime = 'stream__renounceTime',
  StreamSender = 'stream__sender',
  StreamStartTime = 'stream__startTime',
  StreamSubgraphId = 'stream__subgraphId',
  StreamTimestamp = 'stream__timestamp',
  StreamTokenId = 'stream__tokenId',
  StreamTransferable = 'stream__transferable',
  StreamVersion = 'stream__version',
  StreamWithdrawnAmount = 'stream__withdrawnAmount',
  SubgraphId = 'subgraphId',
  Timestamp = 'timestamp'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Asset = {
  __typename?: 'Asset';
  /** address of the ERC20 asset/token */
  address: Scalars['Bytes']['output'];
  /** hardcoded chain id */
  chainId: Scalars['BigInt']['output'];
  /** decimals of the ERC20 asset/token */
  decimals: Scalars['BigInt']['output'];
  /** unique identifier resolving to the ERC20 asset/token address */
  id: Scalars['ID']['output'];
  /** name of the ERC20 asset/token */
  name: Scalars['String']['output'];
  /** streams that rely on this asset/token */
  streams: Array<Stream>;
  /** symbol of the ERC20 asset/token */
  symbol: Scalars['String']['output'];
};


export type AssetStreamsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Stream_Filter>;
};

export type Asset_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Asset_Filter>>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Asset_Filter>>>;
  streams_?: InputMaybe<Stream_Filter>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Asset_OrderBy {
  Address = 'address',
  ChainId = 'chainId',
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Streams = 'streams',
  Symbol = 'symbol'
}

export type Batch = {
  __typename?: 'Batch';
  /** batcher (sender) that started this batch */
  batcher?: Maybe<Batcher>;
  /** hash of the transaction that created this batch */
  hash: Scalars['Bytes']['output'];
  /** unique identifier of the batch, resolving to the hash of the parent transaction */
  id: Scalars['String']['output'];
  /** index of the batch resolving to a conditional counter of 2+ stream batches, filtered by sender (label is null for batches containing a single stream, for filtering) */
  label?: Maybe<Scalars['String']['output']>;
  /** number of streams that are part of this batch */
  size: Scalars['BigInt']['output'];
  /** streams that are part of this batch */
  streams: Array<Stream>;
  /** timestamp of the transaction that created this batch */
  timestamp: Scalars['BigInt']['output'];
};


export type BatchStreamsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Stream_Filter>;
};

export type Batch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Batch_Filter>>>;
  batcher?: InputMaybe<Scalars['String']['input']>;
  batcher_?: InputMaybe<Batcher_Filter>;
  batcher_contains?: InputMaybe<Scalars['String']['input']>;
  batcher_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  batcher_ends_with?: InputMaybe<Scalars['String']['input']>;
  batcher_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batcher_gt?: InputMaybe<Scalars['String']['input']>;
  batcher_gte?: InputMaybe<Scalars['String']['input']>;
  batcher_in?: InputMaybe<Array<Scalars['String']['input']>>;
  batcher_lt?: InputMaybe<Scalars['String']['input']>;
  batcher_lte?: InputMaybe<Scalars['String']['input']>;
  batcher_not?: InputMaybe<Scalars['String']['input']>;
  batcher_not_contains?: InputMaybe<Scalars['String']['input']>;
  batcher_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  batcher_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  batcher_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batcher_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  batcher_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  batcher_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batcher_starts_with?: InputMaybe<Scalars['String']['input']>;
  batcher_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_gt?: InputMaybe<Scalars['String']['input']>;
  label_gte?: InputMaybe<Scalars['String']['input']>;
  label_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_lt?: InputMaybe<Scalars['String']['input']>;
  label_lte?: InputMaybe<Scalars['String']['input']>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Batch_Filter>>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  streams_?: InputMaybe<Stream_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Batch_OrderBy {
  Batcher = 'batcher',
  BatcherAddress = 'batcher__address',
  BatcherBatchIndex = 'batcher__batchIndex',
  BatcherId = 'batcher__id',
  Hash = 'hash',
  Id = 'id',
  Label = 'label',
  Size = 'size',
  Streams = 'streams',
  Timestamp = 'timestamp'
}

export type Batcher = {
  __typename?: 'Batcher';
  /** address of the sender */
  address: Scalars['Bytes']['output'];
  /** numeric index, will be used to construct the batch label */
  batchIndex: Scalars['BigInt']['output'];
  /** batches started by this batcher (sender) */
  batches: Array<Batch>;
  /** unique identifier of the batcher (sender), resolving to their address */
  id: Scalars['String']['output'];
};


export type BatcherBatchesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Batch_Filter>;
};

export type Batcher_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Batcher_Filter>>>;
  batchIndex?: InputMaybe<Scalars['BigInt']['input']>;
  batchIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  batchIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  batchIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  batchIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  batchIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  batchIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  batchIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  batches_?: InputMaybe<Batch_Filter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Batcher_Filter>>>;
};

export enum Batcher_OrderBy {
  Address = 'address',
  BatchIndex = 'batchIndex',
  Batches = 'batches',
  Id = 'id'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Contract = {
  __typename?: 'Contract';
  /** actions on streams, triggered through this contract */
  actions: Array<Action>;
  /** address of the contract */
  address: Scalars['Bytes']['output'];
  /** address of the contract admin */
  admin?: Maybe<Scalars['Bytes']['output']>;
  /** hardcoded alias, resolved by replacing the contract address from the id with the contract alias */
  alias: Scalars['String']['output'];
  /** category of contract e.g. LockupLinear or LockupDynamic */
  category: ContractCategory;
  /** unique identifier resolving to contract address */
  id: Scalars['String']['output'];
  /** streams created through this contract */
  streams: Array<Stream>;
  /** full version based on the v2-core contract versioning system (e.g. '2.0' / '2.1') */
  version: Scalars['String']['output'];
};


export type ContractActionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Action_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Action_Filter>;
};


export type ContractStreamsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Stream_Filter>;
};

export enum ContractCategory {
  LockupDynamic = 'LockupDynamic',
  LockupLinear = 'LockupLinear',
  LockupTranched = 'LockupTranched'
}

export type Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actions_?: InputMaybe<Action_Filter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin?: InputMaybe<Scalars['Bytes']['input']>;
  admin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  admin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  admin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  alias?: InputMaybe<Scalars['String']['input']>;
  alias_contains?: InputMaybe<Scalars['String']['input']>;
  alias_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_ends_with?: InputMaybe<Scalars['String']['input']>;
  alias_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_gt?: InputMaybe<Scalars['String']['input']>;
  alias_gte?: InputMaybe<Scalars['String']['input']>;
  alias_in?: InputMaybe<Array<Scalars['String']['input']>>;
  alias_lt?: InputMaybe<Scalars['String']['input']>;
  alias_lte?: InputMaybe<Scalars['String']['input']>;
  alias_not?: InputMaybe<Scalars['String']['input']>;
  alias_not_contains?: InputMaybe<Scalars['String']['input']>;
  alias_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  alias_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  alias_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  alias_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_starts_with?: InputMaybe<Scalars['String']['input']>;
  alias_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  category?: InputMaybe<ContractCategory>;
  category_in?: InputMaybe<Array<ContractCategory>>;
  category_not?: InputMaybe<ContractCategory>;
  category_not_in?: InputMaybe<Array<ContractCategory>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  streams_?: InputMaybe<Stream_Filter>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Contract_OrderBy {
  Actions = 'actions',
  Address = 'address',
  Admin = 'admin',
  Alias = 'alias',
  Category = 'category',
  Id = 'id',
  Streams = 'streams',
  Version = 'version'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  batch?: Maybe<Batch>;
  batcher?: Maybe<Batcher>;
  batchers: Array<Batcher>;
  batches: Array<Batch>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  segment?: Maybe<Segment>;
  segments: Array<Segment>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  tranche?: Maybe<Tranche>;
  tranches: Array<Tranche>;
  watcher?: Maybe<Watcher>;
  watchers: Array<Watcher>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Action_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Action_Filter>;
};


export type QueryAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Asset_Filter>;
};


export type QueryBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBatcherArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBatchersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batcher_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Batcher_Filter>;
};


export type QueryBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Batch_Filter>;
};


export type QueryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type QuerySegmentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySegmentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Segment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Segment_Filter>;
};


export type QueryStreamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStreamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stream_Filter>;
};


export type QueryTrancheArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTranchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tranche_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tranche_Filter>;
};


export type QueryWatcherArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWatchersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Watcher_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Watcher_Filter>;
};

export type Segment = {
  __typename?: 'Segment';
  /** amount resolving to the value streamed during this segment */
  amount: Scalars['BigInt']['output'];
  /** derived amount resoling to the total amount streamed until the end of the segment */
  endAmount: Scalars['BigInt']['output'];
  /** timestamp resolving to the *milestone* parameter */
  endTime: Scalars['BigInt']['output'];
  /** exponent for the time passed percentage of the main amount compute function */
  exponent: Scalars['BigInt']['output'];
  /** unique id resolving to stream id concatenated with the position of the segment */
  id: Scalars['String']['output'];
  /** timestamp resolving to the end moment of the segment */
  milestone: Scalars['BigInt']['output'];
  /** position of the segment inside the array */
  position: Scalars['BigInt']['output'];
  /** derived amount resoling to the total amount streamed until the start of the segment */
  startAmount: Scalars['BigInt']['output'];
  /** timestamp resolving to the start moment of the segment (the end time of previous segment or the startTime of the stream) */
  startTime: Scalars['BigInt']['output'];
  /** stream upon which the segment is used */
  stream: Stream;
};

export type Segment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Segment_Filter>>>;
  endAmount?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exponent?: InputMaybe<Scalars['BigInt']['input']>;
  exponent_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exponent_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exponent_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exponent_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exponent_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exponent_not?: InputMaybe<Scalars['BigInt']['input']>;
  exponent_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  milestone?: InputMaybe<Scalars['BigInt']['input']>;
  milestone_gt?: InputMaybe<Scalars['BigInt']['input']>;
  milestone_gte?: InputMaybe<Scalars['BigInt']['input']>;
  milestone_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  milestone_lt?: InputMaybe<Scalars['BigInt']['input']>;
  milestone_lte?: InputMaybe<Scalars['BigInt']['input']>;
  milestone_not?: InputMaybe<Scalars['BigInt']['input']>;
  milestone_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Segment_Filter>>>;
  position?: InputMaybe<Scalars['BigInt']['input']>;
  position_gt?: InputMaybe<Scalars['BigInt']['input']>;
  position_gte?: InputMaybe<Scalars['BigInt']['input']>;
  position_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  position_lt?: InputMaybe<Scalars['BigInt']['input']>;
  position_lte?: InputMaybe<Scalars['BigInt']['input']>;
  position_not?: InputMaybe<Scalars['BigInt']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startAmount?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stream?: InputMaybe<Scalars['String']['input']>;
  stream_?: InputMaybe<Stream_Filter>;
  stream_contains?: InputMaybe<Scalars['String']['input']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_gt?: InputMaybe<Scalars['String']['input']>;
  stream_gte?: InputMaybe<Scalars['String']['input']>;
  stream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_lt?: InputMaybe<Scalars['String']['input']>;
  stream_lte?: InputMaybe<Scalars['String']['input']>;
  stream_not?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Segment_OrderBy {
  Amount = 'amount',
  EndAmount = 'endAmount',
  EndTime = 'endTime',
  Exponent = 'exponent',
  Id = 'id',
  Milestone = 'milestone',
  Position = 'position',
  StartAmount = 'startAmount',
  StartTime = 'startTime',
  Stream = 'stream',
  StreamAlias = 'stream__alias',
  StreamBrokerFeeAmount = 'stream__brokerFeeAmount',
  StreamCancelable = 'stream__cancelable',
  StreamCanceled = 'stream__canceled',
  StreamCanceledTime = 'stream__canceledTime',
  StreamCategory = 'stream__category',
  StreamChainId = 'stream__chainId',
  StreamCliff = 'stream__cliff',
  StreamCliffAmount = 'stream__cliffAmount',
  StreamCliffTime = 'stream__cliffTime',
  StreamDepositAmount = 'stream__depositAmount',
  StreamDuration = 'stream__duration',
  StreamEndTime = 'stream__endTime',
  StreamFunder = 'stream__funder',
  StreamHash = 'stream__hash',
  StreamId = 'stream__id',
  StreamIntactAmount = 'stream__intactAmount',
  StreamPosition = 'stream__position',
  StreamProtocolFeeAmount = 'stream__protocolFeeAmount',
  StreamProxender = 'stream__proxender',
  StreamProxied = 'stream__proxied',
  StreamRecipient = 'stream__recipient',
  StreamRenounceTime = 'stream__renounceTime',
  StreamSender = 'stream__sender',
  StreamStartTime = 'stream__startTime',
  StreamSubgraphId = 'stream__subgraphId',
  StreamTimestamp = 'stream__timestamp',
  StreamTokenId = 'stream__tokenId',
  StreamTransferable = 'stream__transferable',
  StreamVersion = 'stream__version',
  StreamWithdrawnAmount = 'stream__withdrawnAmount'
}

export type Stream = {
  __typename?: 'Stream';
  /** actions triggered in the context of this stream */
  actions: Array<Action>;
  /** hardcoded alias, resolved by replacing the contract address from the id with the contract alias */
  alias: Scalars['String']['output'];
  /** asset (ERC20 token) supported by this stream */
  asset: Asset;
  /** batch the stream is part of, only available when created within a batch create transaction */
  batch: Batch;
  /** amount of fees paid to the broker */
  brokerFeeAmount: Scalars['BigInt']['output'];
  /** flag showing the cancelability of the stream (making it false is a one-way trip) */
  cancelable: Scalars['Boolean']['output'];
  /** flag showing if the stream was (making it true is a one-way trip) */
  canceled: Scalars['Boolean']['output'];
  /** action in which the stream was */
  canceledAction?: Maybe<Action>;
  /** timestamp for the when the stream was canceled */
  canceledTime?: Maybe<Scalars['BigInt']['output']>;
  /** type of stream (for sorting reasons) */
  category: StreamCategory;
  /** hardcoded chain id */
  chainId: Scalars['BigInt']['output'];
  /** flag for linear streams with a cliff */
  cliff: Scalars['Boolean']['output'];
  /** derived amount of the cliff, only available on linear streams */
  cliffAmount?: Maybe<Scalars['BigInt']['output']>;
  /** timestamp for the start of the cliff, only available on linear streams */
  cliffTime?: Maybe<Scalars['BigInt']['output']>;
  /** contract through which this stream has been created */
  contract: Contract;
  /** amount deposit in the stream (without fees) */
  depositAmount: Scalars['BigInt']['output'];
  /** snapshot of the duration (difference between end and start time) */
  duration: Scalars['BigInt']['output'];
  /** timestamp for the end of the stream */
  endTime: Scalars['BigInt']['output'];
  /** source of funds for the stream (anyone can create and fund a stream on any sender's behalf) */
  funder: Scalars['Bytes']['output'];
  /** transaction hash for the stream creation */
  hash: Scalars['Bytes']['output'];
  /** unique identifier for the stream, resolving to the origin contract address concatenated with the chainId and the tokenId */
  id: Scalars['String']['output'];
  /** amount resolving to the sum still inside the stream (regardless of it being locked or not) (difference between deposit and withdrawn pre-cancel) */
  intactAmount: Scalars['BigInt']['output'];
  /** list of relevant stream parties (for filtering) - sender, recipient, possibly sender's */
  parties: Array<Scalars['Bytes']['output']>;
  /** position in the batch, only available when created within a batch create transaction */
  position: Scalars['BigInt']['output'];
  /** amount of fees paid to the protocol */
  protocolFeeAmount: Scalars['BigInt']['output'];
  /** owner of the proxy when the stream is created through a PRBProxy (sender = proxy, proxender = owner(proxy)) */
  proxender?: Maybe<Scalars['Bytes']['output']>;
  /** flag for streams created through a proxy */
  proxied: Scalars['Boolean']['output'];
  /** current recipient of the stream, can withdraw the funds (the recipient can change on stream/nft transfer) */
  recipient: Scalars['Bytes']['output'];
  /** action in which the stream has been made non-cancelable (can be the deposit transaction or a different one) */
  renounceAction?: Maybe<Action>;
  /** timestamp for the when the stream was made non-cancelable */
  renounceTime?: Maybe<Scalars['BigInt']['output']>;
  /** segments of the stream curve, only available on dynamic streams */
  segments: Array<Segment>;
  /** manager of the stream, defined at creation by the funder (usually the same as the funder) */
  sender: Scalars['Bytes']['output'];
  /** timestamp for the start of the stream */
  startTime: Scalars['BigInt']['output'];
  /** unique global id tracked by the subgraph watcher - ኆ80 these may change if new contracts are added and the chronological order of streams changes */
  subgraphId: Scalars['BigInt']['output'];
  /** timestamp of the stream creation (for sorting reasons) */
  timestamp: Scalars['BigInt']['output'];
  /** unique identifier for the stream released by the origin contract - same as the tokenId or streamId values given by the contract */
  tokenId: Scalars['BigInt']['output'];
  /** segments of the stream curve, only available on dynamic streams */
  tranches: Array<Tranche>;
  /** flag showing the transferability of the stream (decided when the stream is created) */
  transferable: Scalars['Boolean']['output'];
  /** full version based on the v2-core contract versioning system (e.g. '2.0' / '2.1') */
  version: Scalars['String']['output'];
  /** amount resolving to the sum of all withdrawals */
  withdrawnAmount: Scalars['BigInt']['output'];
};


export type StreamActionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Action_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Action_Filter>;
};


export type StreamSegmentsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Segment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Segment_Filter>;
};


export type StreamTranchesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tranche_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Tranche_Filter>;
};

export enum StreamCategory {
  LockupDynamic = 'LockupDynamic',
  LockupLinear = 'LockupLinear',
  LockupTranched = 'LockupTranched'
}

export type Stream_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actions_?: InputMaybe<Action_Filter>;
  alias?: InputMaybe<Scalars['String']['input']>;
  alias_contains?: InputMaybe<Scalars['String']['input']>;
  alias_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_ends_with?: InputMaybe<Scalars['String']['input']>;
  alias_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_gt?: InputMaybe<Scalars['String']['input']>;
  alias_gte?: InputMaybe<Scalars['String']['input']>;
  alias_in?: InputMaybe<Array<Scalars['String']['input']>>;
  alias_lt?: InputMaybe<Scalars['String']['input']>;
  alias_lte?: InputMaybe<Scalars['String']['input']>;
  alias_not?: InputMaybe<Scalars['String']['input']>;
  alias_not_contains?: InputMaybe<Scalars['String']['input']>;
  alias_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  alias_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  alias_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  alias_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  alias_starts_with?: InputMaybe<Scalars['String']['input']>;
  alias_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Stream_Filter>>>;
  asset?: InputMaybe<Scalars['String']['input']>;
  asset_?: InputMaybe<Asset_Filter>;
  asset_contains?: InputMaybe<Scalars['String']['input']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_gt?: InputMaybe<Scalars['String']['input']>;
  asset_gte?: InputMaybe<Scalars['String']['input']>;
  asset_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_lt?: InputMaybe<Scalars['String']['input']>;
  asset_lte?: InputMaybe<Scalars['String']['input']>;
  asset_not?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains?: InputMaybe<Scalars['String']['input']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asset_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with?: InputMaybe<Scalars['String']['input']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch?: InputMaybe<Scalars['String']['input']>;
  batch_?: InputMaybe<Batch_Filter>;
  batch_contains?: InputMaybe<Scalars['String']['input']>;
  batch_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_ends_with?: InputMaybe<Scalars['String']['input']>;
  batch_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_gt?: InputMaybe<Scalars['String']['input']>;
  batch_gte?: InputMaybe<Scalars['String']['input']>;
  batch_in?: InputMaybe<Array<Scalars['String']['input']>>;
  batch_lt?: InputMaybe<Scalars['String']['input']>;
  batch_lte?: InputMaybe<Scalars['String']['input']>;
  batch_not?: InputMaybe<Scalars['String']['input']>;
  batch_not_contains?: InputMaybe<Scalars['String']['input']>;
  batch_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  batch_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  batch_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  batch_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_starts_with?: InputMaybe<Scalars['String']['input']>;
  batch_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  brokerFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  brokerFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  brokerFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  brokerFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  brokerFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  brokerFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  brokerFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  brokerFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cancelable?: InputMaybe<Scalars['Boolean']['input']>;
  cancelable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cancelable_not?: InputMaybe<Scalars['Boolean']['input']>;
  cancelable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  canceledAction?: InputMaybe<Scalars['String']['input']>;
  canceledAction_?: InputMaybe<Action_Filter>;
  canceledAction_contains?: InputMaybe<Scalars['String']['input']>;
  canceledAction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  canceledAction_ends_with?: InputMaybe<Scalars['String']['input']>;
  canceledAction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  canceledAction_gt?: InputMaybe<Scalars['String']['input']>;
  canceledAction_gte?: InputMaybe<Scalars['String']['input']>;
  canceledAction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  canceledAction_lt?: InputMaybe<Scalars['String']['input']>;
  canceledAction_lte?: InputMaybe<Scalars['String']['input']>;
  canceledAction_not?: InputMaybe<Scalars['String']['input']>;
  canceledAction_not_contains?: InputMaybe<Scalars['String']['input']>;
  canceledAction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  canceledAction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  canceledAction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  canceledAction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  canceledAction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  canceledAction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  canceledAction_starts_with?: InputMaybe<Scalars['String']['input']>;
  canceledAction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  canceledTime?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canceled_not?: InputMaybe<Scalars['Boolean']['input']>;
  canceled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  category?: InputMaybe<StreamCategory>;
  category_in?: InputMaybe<Array<StreamCategory>>;
  category_not?: InputMaybe<StreamCategory>;
  category_not_in?: InputMaybe<Array<StreamCategory>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cliff?: InputMaybe<Scalars['Boolean']['input']>;
  cliffAmount?: InputMaybe<Scalars['BigInt']['input']>;
  cliffAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cliffAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cliffAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cliffAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cliffAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cliffAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  cliffAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cliffTime?: InputMaybe<Scalars['BigInt']['input']>;
  cliffTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cliffTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cliffTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cliffTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cliffTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cliffTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  cliffTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cliff_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cliff_not?: InputMaybe<Scalars['Boolean']['input']>;
  cliff_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAmount?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_not?: InputMaybe<Scalars['BigInt']['input']>;
  duration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  funder?: InputMaybe<Scalars['Bytes']['input']>;
  funder_contains?: InputMaybe<Scalars['Bytes']['input']>;
  funder_gt?: InputMaybe<Scalars['Bytes']['input']>;
  funder_gte?: InputMaybe<Scalars['Bytes']['input']>;
  funder_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  funder_lt?: InputMaybe<Scalars['Bytes']['input']>;
  funder_lte?: InputMaybe<Scalars['Bytes']['input']>;
  funder_not?: InputMaybe<Scalars['Bytes']['input']>;
  funder_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  funder_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  intactAmount?: InputMaybe<Scalars['BigInt']['input']>;
  intactAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  intactAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  intactAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  intactAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  intactAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  intactAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  intactAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Stream_Filter>>>;
  parties?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  parties_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  parties_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  parties_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  parties_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  parties_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  position?: InputMaybe<Scalars['BigInt']['input']>;
  position_gt?: InputMaybe<Scalars['BigInt']['input']>;
  position_gte?: InputMaybe<Scalars['BigInt']['input']>;
  position_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  position_lt?: InputMaybe<Scalars['BigInt']['input']>;
  position_lte?: InputMaybe<Scalars['BigInt']['input']>;
  position_not?: InputMaybe<Scalars['BigInt']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocolFeeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocolFeeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  protocolFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proxender?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  proxender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_not?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proxender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  proxied?: InputMaybe<Scalars['Boolean']['input']>;
  proxied_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  proxied_not?: InputMaybe<Scalars['Boolean']['input']>;
  proxied_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  renounceAction?: InputMaybe<Scalars['String']['input']>;
  renounceAction_?: InputMaybe<Action_Filter>;
  renounceAction_contains?: InputMaybe<Scalars['String']['input']>;
  renounceAction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  renounceAction_ends_with?: InputMaybe<Scalars['String']['input']>;
  renounceAction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  renounceAction_gt?: InputMaybe<Scalars['String']['input']>;
  renounceAction_gte?: InputMaybe<Scalars['String']['input']>;
  renounceAction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  renounceAction_lt?: InputMaybe<Scalars['String']['input']>;
  renounceAction_lte?: InputMaybe<Scalars['String']['input']>;
  renounceAction_not?: InputMaybe<Scalars['String']['input']>;
  renounceAction_not_contains?: InputMaybe<Scalars['String']['input']>;
  renounceAction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  renounceAction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  renounceAction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  renounceAction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  renounceAction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  renounceAction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  renounceAction_starts_with?: InputMaybe<Scalars['String']['input']>;
  renounceAction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  renounceTime?: InputMaybe<Scalars['BigInt']['input']>;
  renounceTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  renounceTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  renounceTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  renounceTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  renounceTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  renounceTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  renounceTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  segments_?: InputMaybe<Segment_Filter>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  startTime?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphId?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_not?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tranches_?: InputMaybe<Tranche_Filter>;
  transferable?: InputMaybe<Scalars['Boolean']['input']>;
  transferable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transferable_not?: InputMaybe<Scalars['Boolean']['input']>;
  transferable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawnAmount?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawnAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Stream_OrderBy {
  Actions = 'actions',
  Alias = 'alias',
  Asset = 'asset',
  AssetAddress = 'asset__address',
  AssetChainId = 'asset__chainId',
  AssetDecimals = 'asset__decimals',
  AssetId = 'asset__id',
  AssetName = 'asset__name',
  AssetSymbol = 'asset__symbol',
  Batch = 'batch',
  BatchHash = 'batch__hash',
  BatchId = 'batch__id',
  BatchLabel = 'batch__label',
  BatchSize = 'batch__size',
  BatchTimestamp = 'batch__timestamp',
  BrokerFeeAmount = 'brokerFeeAmount',
  Cancelable = 'cancelable',
  Canceled = 'canceled',
  CanceledAction = 'canceledAction',
  CanceledActionAddressA = 'canceledAction__addressA',
  CanceledActionAddressB = 'canceledAction__addressB',
  CanceledActionAmountA = 'canceledAction__amountA',
  CanceledActionAmountB = 'canceledAction__amountB',
  CanceledActionBlock = 'canceledAction__block',
  CanceledActionCategory = 'canceledAction__category',
  CanceledActionChainId = 'canceledAction__chainId',
  CanceledActionFrom = 'canceledAction__from',
  CanceledActionHash = 'canceledAction__hash',
  CanceledActionId = 'canceledAction__id',
  CanceledActionSubgraphId = 'canceledAction__subgraphId',
  CanceledActionTimestamp = 'canceledAction__timestamp',
  CanceledTime = 'canceledTime',
  Category = 'category',
  ChainId = 'chainId',
  Cliff = 'cliff',
  CliffAmount = 'cliffAmount',
  CliffTime = 'cliffTime',
  Contract = 'contract',
  ContractAddress = 'contract__address',
  ContractAdmin = 'contract__admin',
  ContractAlias = 'contract__alias',
  ContractCategory = 'contract__category',
  ContractId = 'contract__id',
  ContractVersion = 'contract__version',
  DepositAmount = 'depositAmount',
  Duration = 'duration',
  EndTime = 'endTime',
  Funder = 'funder',
  Hash = 'hash',
  Id = 'id',
  IntactAmount = 'intactAmount',
  Parties = 'parties',
  Position = 'position',
  ProtocolFeeAmount = 'protocolFeeAmount',
  Proxender = 'proxender',
  Proxied = 'proxied',
  Recipient = 'recipient',
  RenounceAction = 'renounceAction',
  RenounceActionAddressA = 'renounceAction__addressA',
  RenounceActionAddressB = 'renounceAction__addressB',
  RenounceActionAmountA = 'renounceAction__amountA',
  RenounceActionAmountB = 'renounceAction__amountB',
  RenounceActionBlock = 'renounceAction__block',
  RenounceActionCategory = 'renounceAction__category',
  RenounceActionChainId = 'renounceAction__chainId',
  RenounceActionFrom = 'renounceAction__from',
  RenounceActionHash = 'renounceAction__hash',
  RenounceActionId = 'renounceAction__id',
  RenounceActionSubgraphId = 'renounceAction__subgraphId',
  RenounceActionTimestamp = 'renounceAction__timestamp',
  RenounceTime = 'renounceTime',
  Segments = 'segments',
  Sender = 'sender',
  StartTime = 'startTime',
  SubgraphId = 'subgraphId',
  Timestamp = 'timestamp',
  TokenId = 'tokenId',
  Tranches = 'tranches',
  Transferable = 'transferable',
  Version = 'version',
  WithdrawnAmount = 'withdrawnAmount'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  batch?: Maybe<Batch>;
  batcher?: Maybe<Batcher>;
  batchers: Array<Batcher>;
  batches: Array<Batch>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  segment?: Maybe<Segment>;
  segments: Array<Segment>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  tranche?: Maybe<Tranche>;
  tranches: Array<Tranche>;
  watcher?: Maybe<Watcher>;
  watchers: Array<Watcher>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionActionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionActionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Action_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Action_Filter>;
};


export type SubscriptionAssetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAssetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Asset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Asset_Filter>;
};


export type SubscriptionBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBatcherArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBatchersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batcher_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Batcher_Filter>;
};


export type SubscriptionBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Batch_Filter>;
};


export type SubscriptionContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type SubscriptionSegmentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSegmentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Segment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Segment_Filter>;
};


export type SubscriptionStreamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStreamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stream_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stream_Filter>;
};


export type SubscriptionTrancheArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTranchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tranche_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tranche_Filter>;
};


export type SubscriptionWatcherArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWatchersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Watcher_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Watcher_Filter>;
};

export type Tranche = {
  __typename?: 'Tranche';
  /** amount resolving to the value streamed during this tranche */
  amount: Scalars['BigInt']['output'];
  /** derived amount resoling to the total amount streamed until the end of the timestamp */
  endAmount: Scalars['BigInt']['output'];
  /** timestamp resolving to the *timestamp* parameter */
  endTime: Scalars['BigInt']['output'];
  /** unique id resolving to stream id concatenated with the position of the tranche */
  id: Scalars['String']['output'];
  /** position of the tranche inside the array */
  position: Scalars['BigInt']['output'];
  /** derived amount resoling to the total amount streamed until the start of the timestamp */
  startAmount: Scalars['BigInt']['output'];
  /** timestamp resolving to the start moment of the timestamp (the end time of previous timestamp or the startTime of the stream) */
  startTime: Scalars['BigInt']['output'];
  /** stream upon which the tranche is used */
  stream: Stream;
  /** timestamp resolving to the end moment of the tranche */
  timestamp: Scalars['BigInt']['output'];
};

export type Tranche_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Tranche_Filter>>>;
  endAmount?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  endAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Tranche_Filter>>>;
  position?: InputMaybe<Scalars['BigInt']['input']>;
  position_gt?: InputMaybe<Scalars['BigInt']['input']>;
  position_gte?: InputMaybe<Scalars['BigInt']['input']>;
  position_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  position_lt?: InputMaybe<Scalars['BigInt']['input']>;
  position_lte?: InputMaybe<Scalars['BigInt']['input']>;
  position_not?: InputMaybe<Scalars['BigInt']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startAmount?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  startAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stream?: InputMaybe<Scalars['String']['input']>;
  stream_?: InputMaybe<Stream_Filter>;
  stream_contains?: InputMaybe<Scalars['String']['input']>;
  stream_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_gt?: InputMaybe<Scalars['String']['input']>;
  stream_gte?: InputMaybe<Scalars['String']['input']>;
  stream_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_lt?: InputMaybe<Scalars['String']['input']>;
  stream_lte?: InputMaybe<Scalars['String']['input']>;
  stream_not?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains?: InputMaybe<Scalars['String']['input']>;
  stream_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stream_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with?: InputMaybe<Scalars['String']['input']>;
  stream_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Tranche_OrderBy {
  Amount = 'amount',
  EndAmount = 'endAmount',
  EndTime = 'endTime',
  Id = 'id',
  Position = 'position',
  StartAmount = 'startAmount',
  StartTime = 'startTime',
  Stream = 'stream',
  StreamAlias = 'stream__alias',
  StreamBrokerFeeAmount = 'stream__brokerFeeAmount',
  StreamCancelable = 'stream__cancelable',
  StreamCanceled = 'stream__canceled',
  StreamCanceledTime = 'stream__canceledTime',
  StreamCategory = 'stream__category',
  StreamChainId = 'stream__chainId',
  StreamCliff = 'stream__cliff',
  StreamCliffAmount = 'stream__cliffAmount',
  StreamCliffTime = 'stream__cliffTime',
  StreamDepositAmount = 'stream__depositAmount',
  StreamDuration = 'stream__duration',
  StreamEndTime = 'stream__endTime',
  StreamFunder = 'stream__funder',
  StreamHash = 'stream__hash',
  StreamId = 'stream__id',
  StreamIntactAmount = 'stream__intactAmount',
  StreamPosition = 'stream__position',
  StreamProtocolFeeAmount = 'stream__protocolFeeAmount',
  StreamProxender = 'stream__proxender',
  StreamProxied = 'stream__proxied',
  StreamRecipient = 'stream__recipient',
  StreamRenounceTime = 'stream__renounceTime',
  StreamSender = 'stream__sender',
  StreamStartTime = 'stream__startTime',
  StreamSubgraphId = 'stream__subgraphId',
  StreamTimestamp = 'stream__timestamp',
  StreamTokenId = 'stream__tokenId',
  StreamTransferable = 'stream__transferable',
  StreamVersion = 'stream__version',
  StreamWithdrawnAmount = 'stream__withdrawnAmount',
  Timestamp = 'timestamp'
}

export type Watcher = {
  __typename?: 'Watcher';
  /** global index for streams */
  actionIndex: Scalars['BigInt']['output'];
  /** hardcoded chain id */
  chainId: Scalars['BigInt']['output'];
  /** unique identifier for the watcher, resolving to the chainId - there is one watcher for entire subgraph */
  id: Scalars['String']['output'];
  /** flag that defines the initialization status of the subgraph */
  initialized: Scalars['Boolean']['output'];
  /** list of logs, for debugging purposes */
  logs: Array<Scalars['String']['output']>;
  /** global index for streams */
  streamIndex: Scalars['BigInt']['output'];
};

export type Watcher_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actionIndex?: InputMaybe<Scalars['BigInt']['input']>;
  actionIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  actionIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  actionIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actionIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  actionIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  actionIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  actionIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Watcher_Filter>>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  initialized?: InputMaybe<Scalars['Boolean']['input']>;
  initialized_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  initialized_not?: InputMaybe<Scalars['Boolean']['input']>;
  initialized_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  logs?: InputMaybe<Array<Scalars['String']['input']>>;
  logs_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  logs_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  logs_not?: InputMaybe<Array<Scalars['String']['input']>>;
  logs_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  logs_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Watcher_Filter>>>;
  streamIndex?: InputMaybe<Scalars['BigInt']['input']>;
  streamIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  streamIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  streamIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  streamIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  streamIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  streamIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  streamIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Watcher_OrderBy {
  ActionIndex = 'actionIndex',
  ChainId = 'chainId',
  Id = 'id',
  Initialized = 'initialized',
  Logs = 'logs',
  StreamIndex = 'streamIndex'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
