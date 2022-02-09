import React from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProps {
  children: React.ReactNode,
}

const theme = {
  colors: {
    DARK_GREY: "#696969",
    LIGHT_GREY: "#E3E4E7",
    LIGHT_BLUE: "#ADB9C3",
    DARK_BLUE: "#3878A2",
    WHITE: "#FFFFFF",
  },
};

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
