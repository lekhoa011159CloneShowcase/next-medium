import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useFetcher from "utils/swr";
import Item from "./Item";
import sx from "./styles";

function Trending() {
  const { data, isLoading } = useFetcher("/topfeeds/medium/hot", {
    params: { count: 6, after: 0 },
  });

  if (isLoading) {
    return (
      <Box sx={sx.loading}>
        <CircularProgress />
      </Box>
    );
  }

  const { topfeeds } = data;

  return (
    <Container sx={sx.container}>
      <Box>
        <Box sx={sx.title}>
          <AutoGraphRoundedIcon />
          <Typography sx={sx.typography}>Trending on Medium</Typography>
        </Box>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {topfeeds.map((articleId: string, index: number) => (
            <Grid key={articleId} md={4} sm={6} sx={{ display: "flex" }}>
              <Item id={articleId} order={index + 1 + ""} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Trending;
