import { Avatar, Box, Typography } from "@mui/material";
import useFetcher from "utils/swr";
import sx from "./styles";

interface Props {
  id: string;
}

function Author({ id }: Props) {
  const { data, isLoading } = useFetcher(`/user/${id}`);

  if (isLoading) {
    return null;
  }

  const { image_url, fullname } = data;

  return (
    <Box sx={sx.container}>
      <Avatar sx={sx.avatar} src={image_url} alt={fullname} />
      <Typography variant="subtitle2">{fullname}</Typography>
    </Box>
  );
}

export default Author;
