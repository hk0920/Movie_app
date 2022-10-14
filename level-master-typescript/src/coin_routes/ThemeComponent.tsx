import styled, { ThemeProvider } from "styled-components";
import ResetStyled from "./ResetStyled";
import { theme } from "./Theme";

function ThemeComponent(){
    return(
        <ThemeProvider theme={theme}>
            <ResetStyled />
        </ThemeProvider>
    )
}

export default ThemeComponent;