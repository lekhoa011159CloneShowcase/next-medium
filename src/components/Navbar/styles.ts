import { SxProps } from "@mui/material";
import theme from "utils/theme";

const sx = {
  appBar: {
    bgcolor: theme.palette.yellow.main,
    borderBottom: "1px solid #000",
    transition: `${theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.standard,
    })}`,
  } satisfies SxProps,

  scrolledAppBar: {
    bgcolor: "#fff",
  } satisfies SxProps,

  scrolledButton: {
    bgcolor: theme.palette.green.main,
    color: "#fff",
  } satisfies SxProps,

  container: {
    py: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } satisfies SxProps,

  linkItem: {
    mr: 3,
    fontSize: 14,
    color: "#000",
  } satisfies SxProps,
};

export default sx;
