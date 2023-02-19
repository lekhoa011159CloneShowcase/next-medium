import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import moment from "moment";
import useFetcher from "utils/swr";
import AuthorInfo from "../AuthorInfo";

import sx from "./styles";

interface Props {
  id: string;
  order: string;
}

function Item({ id, order }: Props) {
  const { data, isLoading } = useFetcher(`/article/${id}`);

  if (isLoading) {
    return null;
  }

  const { reading_time, published_at, title, author: authorId } = data;
  const publishedDate = moment(published_at, "YYYY-MM-DD hh:mm:ss").format(
    "MMM DD"
  );

  return (
    <>
      <Typography color="text.secondary" sx={sx.order}>
        {order.padStart(2, "0")}
      </Typography>
      <Card variant="outlined" sx={sx.card}>
        <CardContent>
          <AuthorInfo id={authorId} />
          <Typography sx={sx.cardTitle} gutterBottom>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={sx.cardFooter}>
            {publishedDate} &nbsp;•&nbsp; {Math.round(reading_time)} min read
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Item;
