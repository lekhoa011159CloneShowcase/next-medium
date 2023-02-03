import { SxProps } from "@mui/material";
import theme from "utils/theme";

const sx = {
  container: {
    mt: "69px",
    bgcolor: theme.palette.yellow.main,
    position: "relative",
    borderBottom: "1px solid #000",
  } satisfies SxProps,

  description: {
    py: 11.5,
  } satisfies SxProps,

  animation: {
    width: 585,
    position: "absolute",
    right: 0,
    top: 0,
  } satisfies SxProps,

  subtitle: {
    pt: 4,
    pb: 6,
    "& .MuiTypography-body1": {
      fontSize: 24,
    },
  } satisfies SxProps,

  button: {
    fontSize: "1.25rem",
  } satisfies SxProps,
};

export default sx;
