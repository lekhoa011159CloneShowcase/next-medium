import theme from "utils/theme";

const sxCommon = {
  button: {
    bgcolor: "#000",
    color: "#fff",
    transition: `${theme.transitions.create(["background-color", "color"], {
      duration: theme.transitions.duration.standard,
    })}`,
  },
};

export default sxCommon;
