import { createTheme } from "@mui/material/styles";
import { Roboto } from "@next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (color: string) => augmentColor({ color: { main: color } });

// Create a theme instance.
const theme = createTheme({
  palette: {
    green: createColor("rgb(26, 137, 23)"),
    yellow: createColor("#FFC017"),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
