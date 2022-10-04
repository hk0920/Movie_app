import styled from "styled-components";
import Counter from "./Counter";

const Wrapper = styled.div`
    margin-bottom:50px;
`;

const Title = styled.h3`
    color:#000;
`;

function Component2 (){
    return(
        <Wrapper>
            <Title>2. useState를 이용하여 state값 변경하기</Title>
            <Counter />
        </Wrapper>
    )
}

export default Component2;