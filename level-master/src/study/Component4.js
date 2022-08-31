import styled from "styled-components";

// theme - 기본적으로 모든 색상들을 가지고 있는 object
const Wrapper = styled.div`
    display:inline-block;
    width:200px;
    height:200px;
    padding:50px 0;
    text-align:center;
    box-sizing:border-box;
    background-color:${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function Component4(){
    return (
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
    )
}

export default Component4;