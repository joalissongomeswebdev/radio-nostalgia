import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { globalStyling } from "../styles/globalStyles";
import { ReactNode } from "react";
import { defaultTheme } from "./defaultTheme";

interface ThemeComponentProps {
  children: ReactNode;
}

export function ThemeComponent({ children }: ThemeComponentProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles styles={() => globalStyling()} />

      {children}
    </ThemeProvider>
  );
}
