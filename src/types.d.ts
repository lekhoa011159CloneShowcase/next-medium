import "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    green: string;
    black: string;
    yellow: string;
  }
}

declare module "@mui/material/styles" {
  interface IPalette {
    green: PaletteColorOptions;
    black: PaletteColorOptions;
    yellow: PaletteColorOptions;
  }

  interface Palette extends IPalette {}
  interface PaletteOptions extends IPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    green: true;
    black: true;
    yellow: true;
  }
}
