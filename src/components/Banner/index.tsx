import { ReactElement } from "react";
import { Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";

import Animated from "./Animated";

import sx from "./styles";
import sxCommon from "styles";

function Banner(): ReactElement {
  return (
    <Container maxWidth={false} disableGutters sx={sx.container}>
      <Container maxWidth="lg" disableGutters sx={sx.description}>
        <Typography variant="h1" color="#000">
          Stay currious.
        </Typography>
        <Box sx={sx.subtitle}>
          <Typography color="#000">
            Discover stories, thinking, and expertise
          </Typography>
          <Typography color="#000">from writers on any topic.</Typography>
        </Box>
        <Button size="large" sx={{ ...sxCommon.button, ...sx.button }}>
          Start reading
        </Button>
      </Container>

      <Box sx={sx.animation}>
        <Animated />
      </Box>
    </Container>
  );
}

export default Banner;
