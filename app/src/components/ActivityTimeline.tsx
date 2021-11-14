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
import { useTheme } from "@mui/material/styles";

dayjs.extend(relativeTime);

const SOLANA_EXPLORER_URL = "https://explorer.solana.com/tx/";

export const ActivityTimeline = (props: any) => {
  const { transactions } = useAppSelector((state: RootState) => state.dao);
  const theme = useTheme();

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
              {transaction.signature.slice(0, 4)}...
              {transaction.signature.slice(-4)}
            </Link>
            <Chip
              label={
                transaction.confirmationStatus === "finalized"
                  ? "Success"
                  : "Failed"
              }
              sx={{
                color:
                  transaction.confirmationStatus === "finalized"
                    ? // @ts-ignore
                      theme.palette.success[400]
                    : // @ts-ignore
                      theme.palette.error[400],
                bgcolor:
                  transaction.confirmationStatus === "finalized"
                    ? // @ts-ignore
                      theme.palette.success[900]
                    : // @ts-ignore
                      theme.palette.error[900],
              }}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
