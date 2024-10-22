/* eslint-disable */
/**
 * WARNING: THIS FILE IS AUTO-GENERATED, DO NOT EDIT IT DIRECTLY!
 */

import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetStream_ByIdQueryVariables = Types.Exact<{
  streamId: Types.Scalars['ID']['input'];
}>;


export type GetStream_ByIdQuery = { __typename?: 'Query', stream?: { __typename?: 'Stream', id: string, tokenId: any, subgraphId: any, chainId: any, alias: string, category: Types.StreamCategory, funder: any, sender: any, recipient: any, hash: any, timestamp: any, depositAmount: any, startTime: any, endTime: any, cliff: boolean, cliffTime?: any | null, cliffAmount?: any | null, cancelable: boolean, renounceTime?: any | null, canceled: boolean, canceledTime?: any | null, withdrawnAmount: any, intactAmount: any, position: any, proxied: boolean, proxender?: any | null, transferable: boolean, version: string, asset: { __typename?: 'Asset', id: string, address: any, chainId: any, decimals: any, name: string, symbol: string }, batch: { __typename?: 'Batch', id: string, label?: string | null, size: any }, contract: { __typename?: 'Contract', id: string, address: any, category: Types.ContractCategory, version: string }, segments: Array<{ __typename?: 'Segment', id: string, position: any, amount: any, exponent: any, milestone: any, endTime: any, startTime: any, startAmount: any, endAmount: any }>, tranches: Array<{ __typename?: 'Tranche', id: string, position: any, amount: any, timestamp: any, endTime: any, startTime: any, startAmount: any, endAmount: any }> } | null };

export type AssetFragment = { __typename?: 'Asset', id: string, address: any, chainId: any, decimals: any, name: string, symbol: string };

export type BatchFragment = { __typename?: 'Batch', id: string, label?: string | null, size: any };

export type ContractFragment = { __typename?: 'Contract', id: string, address: any, category: Types.ContractCategory, version: string };

export type SegmentFragment = { __typename?: 'Segment', id: string, position: any, amount: any, exponent: any, milestone: any, endTime: any, startTime: any, startAmount: any, endAmount: any };

export type TrancheFragment = { __typename?: 'Tranche', id: string, position: any, amount: any, timestamp: any, endTime: any, startTime: any, startAmount: any, endAmount: any };

export type StreamFragment = { __typename?: 'Stream', id: string, tokenId: any, subgraphId: any, chainId: any, alias: string, category: Types.StreamCategory, funder: any, sender: any, recipient: any, hash: any, timestamp: any, depositAmount: any, startTime: any, endTime: any, cliff: boolean, cliffTime?: any | null, cliffAmount?: any | null, cancelable: boolean, renounceTime?: any | null, canceled: boolean, canceledTime?: any | null, withdrawnAmount: any, intactAmount: any, position: any, proxied: boolean, proxender?: any | null, transferable: boolean, version: string, asset: { __typename?: 'Asset', id: string, address: any, chainId: any, decimals: any, name: string, symbol: string }, batch: { __typename?: 'Batch', id: string, label?: string | null, size: any }, contract: { __typename?: 'Contract', id: string, address: any, category: Types.ContractCategory, version: string }, segments: Array<{ __typename?: 'Segment', id: string, position: any, amount: any, exponent: any, milestone: any, endTime: any, startTime: any, startAmount: any, endAmount: any }>, tranches: Array<{ __typename?: 'Tranche', id: string, position: any, amount: any, timestamp: any, endTime: any, startTime: any, startAmount: any, endAmount: any }> };

export const AssetFragmentDoc = gql`
    fragment AssetFragment on Asset {
  id
  address
  chainId
  decimals
  name
  symbol
}
    `;
export const BatchFragmentDoc = gql`
    fragment BatchFragment on Batch {
  id
  label
  size
}
    `;
export const ContractFragmentDoc = gql`
    fragment ContractFragment on Contract {
  id
  address
  category
  version
}
    `;
export const SegmentFragmentDoc = gql`
    fragment SegmentFragment on Segment {
  id
  position
  amount
  exponent
  milestone
  endTime
  startTime
  startAmount
  endAmount
}
    `;
export const TrancheFragmentDoc = gql`
    fragment TrancheFragment on Tranche {
  id
  position
  amount
  timestamp
  endTime
  startTime
  startAmount
  endAmount
}
    `;
export const StreamFragmentDoc = gql`
    fragment StreamFragment on Stream {
  id
  tokenId
  subgraphId
  chainId
  alias
  category
  funder
  sender
  recipient
  hash
  timestamp
  depositAmount
  startTime
  endTime
  cliff
  cliffTime
  cliffAmount
  cancelable
  renounceTime
  canceled
  canceledTime
  withdrawnAmount
  intactAmount
  position
  proxied
  proxender
  transferable
  version
  asset {
    ...AssetFragment
  }
  batch {
    ...BatchFragment
  }
  contract {
    ...ContractFragment
  }
  segments {
    ...SegmentFragment
  }
  tranches {
    ...TrancheFragment
  }
}
    ${AssetFragmentDoc}
${BatchFragmentDoc}
${ContractFragmentDoc}
${SegmentFragmentDoc}
${TrancheFragmentDoc}`;
export const GetStream_ByIdDocument = gql`
    query getStream_ById($streamId: ID!) {
  stream(id: $streamId) {
    ...StreamFragment
  }
}
    ${StreamFragmentDoc}`;

/**
 * __useGetStream_ByIdQuery__
 *
 * To run a query within a React component, call `useGetStream_ByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStream_ByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStream_ByIdQuery({
 *   variables: {
 *      streamId: // value for 'streamId'
 *   },
 * });
 */
export function useGetStream_ByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStream_ByIdQuery, GetStream_ByIdQueryVariables> & ({ variables: GetStream_ByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStream_ByIdQuery, GetStream_ByIdQueryVariables>(GetStream_ByIdDocument, options);
      }
export function useGetStream_ByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStream_ByIdQuery, GetStream_ByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStream_ByIdQuery, GetStream_ByIdQueryVariables>(GetStream_ByIdDocument, options);
        }
export function useGetStream_ByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStream_ByIdQuery, GetStream_ByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStream_ByIdQuery, GetStream_ByIdQueryVariables>(GetStream_ByIdDocument, options);
        }
export type GetStream_ByIdQueryHookResult = ReturnType<typeof useGetStream_ByIdQuery>;
export type GetStream_ByIdLazyQueryHookResult = ReturnType<typeof useGetStream_ByIdLazyQuery>;
export type GetStream_ByIdSuspenseQueryHookResult = ReturnType<typeof useGetStream_ByIdSuspenseQuery>;
export type GetStream_ByIdQueryResult = Apollo.QueryResult<GetStream_ByIdQuery, GetStream_ByIdQueryVariables>;