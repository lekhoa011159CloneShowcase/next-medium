import { SxProps } from "@mui/material";
import theme from "utils/theme";

const sx = {
  banner: {
    bgcolor: theme.palette.yellow.main,
  } satisfies SxProps,

  bannerTitle: {
    py: 11.5,
  } satisfies SxProps,
};

export default sx;
