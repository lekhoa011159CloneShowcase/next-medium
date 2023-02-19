import { SxProps } from "@mui/material";

const sx = {
  container: {
    py: 6,
  } satisfies SxProps,

  loading: {
    mt: 6,
    display: "flex",
    justifyContent: "center",
  } satisfies SxProps,

  title: {
    display: "flex",
    alignItems: "center",
  } satisfies SxProps,

  typography: {
    ml: 1,
    fontWeight: 500,
    display: "inline-block",
  } satisfies SxProps,
};

export default sx;
