import styled, { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

const ThemeBox = styled.div`
    display:inline-block;
    padding:20px;
    margin:0 20px;
    background-color:${(props) => props.theme.bgColor};
    border:2px solid ${(props) => props.theme.textColor};
`

const H1 = styled.h1`
    color:${(props) => props.theme.textColor};
`;

const Button = styled.button`
    display:inline-block;
    padding:5px 10px;
    color:${(props) => props.theme.textColor};
    background:${(props)=>props.theme.btnColor};
`;

function ThemeComponent(){
    return(
        <div>   
            <ThemeProvider theme={theme}>
                <ThemeBox>
                    <H1>Hi, Light Box!</H1>
                    <Button>Click!</Button>
                </ThemeBox>
            </ThemeProvider>
        </div>
    )
}

export default ThemeComponent;