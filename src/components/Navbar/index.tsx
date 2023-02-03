import { Box, Button, Container, Link } from "@mui/material";
import Logo from "components/Logo";
import { ReactElement } from "react";

import sx from "./styles";

const menu = [
  { text: "Our story", link: "/about" },
  { text: "Membership", link: "/membership" },
  { text: "Write", link: "/creators" },
  { text: "Sign In", link: "/signin" },
];

function Navbar(): ReactElement {
  return (
    <Container maxWidth="lg" disableGutters>
      <Box sx={sx.appBar}>
        <Link href="/">
          <Logo />
        </Link>

        <Box>
          {menu.map((item) => (
            <Link
              sx={sx.linkItem}
              underline="none"
              key={item.link}
              href={item.link}
            >
              {item.text}
            </Link>
          ))}

          <Button color="black" variant="contained">
            Get started
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;
