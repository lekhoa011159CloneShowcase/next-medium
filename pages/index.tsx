import { Container } from "@mui/material";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import Trending from "components/Trending";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      <Banner />
      <Trending />
    </Container>
  );
}
