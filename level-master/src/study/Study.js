import styled from "styled-components";
import Component1 from "./Component1";
import Component2 from "./Component2";

const Title = styled.h3`
    margin-bottom:10px;
`;

const Box = styled.div`
    margin-bottom:40px;
`;

function Study(){
    return (
        <div>
            <Box>
                <Title>1. styled-components 이용 - 컴포넌트 추가, props 받아 설정, 컴포넌트 확장</Title>
                <Component1 />
            </Box>
            <Box>
                <Title>2. styled-components 이용 - 컴포넌트 html 태그 변경</Title>
                <Component2 />
            </Box>
        </div>
    )
}

export default Study;