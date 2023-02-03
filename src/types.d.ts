import "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    green: string;
    yellow: string;
  }
}

declare module "@mui/material/styles" {
  interface IPalette {
    green: PaletteColorOptions;
    yellow: PaletteColorOptions;
  }

  interface Palette extends IPalette {}
  interface PaletteOptions extends IPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    green: true;
    yellow: true;
  }
}
