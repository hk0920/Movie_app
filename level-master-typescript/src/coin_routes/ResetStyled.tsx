import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }
    /* HTML5 hidden-attribute fix for newer browsers */
    * {
        box-sizing:border-box;
    }
    *[hidden] {
        display: none;
    }
    body {
        font-family:'Noto Sans KR', sans-serif;
        line-height: 1;
        color:${(props) => props.theme.textColor};
        background-color:${(props) => props.theme.bgColor};
    }
    menu, ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        color:inherit;
        text-decoration:none;
    }
`;

function ResetStyled(){
    return (
        // 꼭 return 에는 하나의 element만 반환해야한다.
        // <></>  : Flagment 로 여러 컴포넌트를 묶어 반환하는 react 문법 (유령 컴포넌트)
        //          부모없이 서로 붙어 있는 많은 컴포넌트들을 리턴할 수 있게 해준다.
        <>  
            {/* resetStyle을 router와 같이 담으면 html 안의 style이 같이 들어간다. */}
            <GlobalStyle/>  
            <Router/>
        </>
    )
}

export default ResetStyled;