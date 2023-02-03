import { Box, Typography } from "@mui/material";
import { default as Grid } from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/system";
import AnimateBanner from "components/AnimateBanner";
import { ReactElement } from "react";

import sx from "./styles";

function Banner(): ReactElement {
  return (
    <Container maxWidth={false} disableGutters sx={sx.banner}>
      <Grid container>
        <Container maxWidth="lg" disableGutters>
          <Grid xs={6} sx={sx.bannerTitle}>
            <Typography variant="h1" color="#000">
              Stay currious.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <AnimateBanner />
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}

export default Banner;
