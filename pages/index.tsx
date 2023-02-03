import { AppBar, Container } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import theme from "utils/theme";

const sx = {
  appBar: {
    bgcolor: theme.palette.yellow.main,
    borderBottom: "1px solid #000",
  } satisfies SxProps,
};

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <AppBar sx={sx.appBar} position="static">
        <Navbar />
      </AppBar>
      <Banner />
    </Container>
  );
}
