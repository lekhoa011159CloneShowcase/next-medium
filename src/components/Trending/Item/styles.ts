import { SxProps } from "@mui/material";

const sx = {
  order: {
    fontSize: "2rem",
    fontWeight: 500,
    color: "#e6e6e6",
    pt: 0.5,
  } satisfies SxProps,

  card: { border: 0 } satisfies SxProps,

  cardTitle: { fontWeight: 500 } satisfies SxProps,

  cardFooter: { fontSize: ".8rem" } satisfies SxProps,
};

export default sx;
