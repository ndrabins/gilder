import { Drawer } from "../components";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";
import { Link, Chip } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const SOLANA_EXPLORER_URL = "https://explorer.solana.com/tx/";

export const ActivityTimeline = (props: any) => {
  const { transactions } = useAppSelector((state: RootState) => state.dao);
  console.log(transactions);

  return (
    <Timeline sx={{ p: 0 }}>
      {transactions.map((transaction: any, index: number) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ minWidth: 120, flex: 0 }}
          >
            {/* @ts-ignore */}
            {dayjs(transactions[0].blockTime * 1000).fromNow()}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{ pr: 0, display: "flex", justifyContent: "space-between" }}
          >
            <Link
              href={`${SOLANA_EXPLORER_URL}${transaction.signature}`}
              target="_blank"
              rel="noreferrer"
              sx={{ color: "grey.300", mr: 1 }}
            >
              {transaction.signature.slice(0, 5)}...
              {transaction.signature.slice(-5)}
            </Link>
            <Chip
              label={
                transaction.confirmationStatus === "finalized"
                  ? "Success"
                  : "Failed"
              }
              color={
                transaction.confirmationStatus === "finalized"
                  ? "success"
                  : "error"
              }
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
