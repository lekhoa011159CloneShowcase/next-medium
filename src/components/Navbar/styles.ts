import { SxProps } from "@mui/material";
import theme from "utils/theme";

const sx = {
  appBar: {
    py: 3,
    display: "flex",
    flexDirection: "row",
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
