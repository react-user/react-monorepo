import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { Color } from "./color.util";

export const paletteOptions: PaletteOptions = {
    primary: {
        contrastText: Color.COLOR_WHITE,
        dark: Color.COLOR_TEAL_DARK,
        light: Color.COLOR_TEAL_LIGHT,
        main: Color.COLOR_TEAL,
    },
    secondary: {
        contrastText: Color.COLOR_WHITE,
        dark: Color.COLOR_GREEN_DARK,
        light: Color.COLOR_GREEN_LIGHT,
        main: Color.COLOR_GREEN,
    },
};
