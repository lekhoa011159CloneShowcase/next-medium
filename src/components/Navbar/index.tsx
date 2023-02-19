import {
  Box,
  Button,
  Container,
  Link,
  AppBar,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Logo from "components/Logo";
import { ReactElement } from "react";
import sxCommon from "styles";

import sx from "./styles";

const menu = [
  { text: "Our story", link: "/about" },
  { text: "Membership", link: "/membership" },
  { text: "Write", link: "/creators" },
  { text: "Sign In", link: "/signin" },
];

function Navbar(): ReactElement {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 320,
  });

  return (
    <AppBar
      position="fixed"
      sx={{ ...sx.appBar, ...(trigger ? sx.scrolledAppBar : {}) }}
    >
      <Toolbar>
        <Container maxWidth="lg" sx={sx.container}>
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

            <Button
              sx={{
                ...sxCommon.button,
                ...(trigger ? sx.scrolledButton : {}),
              }}
              variant="contained"
            >
              Get started
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
