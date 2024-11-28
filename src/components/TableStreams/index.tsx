import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useRouter } from "next/navigation";
import { useAccount, useChainId } from "wagmi";
import { useGetStreams_BySender_Or_ByRecipientLazyQuery } from "@/lib/graphql/graphql";
import { amountToken } from "@/utils";

type Props = {};

const TableStreams = (props: Props) => {
  const router = useRouter();
  const account = useAccount();
  const chainId = useChainId();
  const [callDataListStreamsQuery, dataListStreamsQuery] =
    useGetStreams_BySender_Or_ByRecipientLazyQuery();
  const listStreams = dataListStreamsQuery?.data?.streams;

  const goToDetailStream = (streamId: string) => {
    router?.push(`/stream/${streamId}`);
  };

  useEffect(() => {
    callDataListStreamsQuery({
      variables: {
        chainId,
        first: 31,
        skip: 0,
        subgraphId: "1000000000",
        sender: account?.address,
        recipient: account?.address,
      },
    });
  }, [chainId, account?.address]);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>VALUE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listStreams?.map((stream) => {
          return (
            <TableRow
              onClick={() => goToDetailStream(stream?.id)}
              key={stream?.id}
            >
              <TableCell>{stream?.id}</TableCell>
              <TableCell>
                {`${stream?.asset?.symbol} ${amountToken(stream?.depositAmount)}`}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableStreams;
