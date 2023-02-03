import { AppBar, Container, Box } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import theme from "utils/theme";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      <Banner />
    </Container>
  );
}
