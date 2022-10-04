import styled from "styled-components";
import Forms from "./Form";

const Wrapper = styled.div`
    margin-bottom:50px;
`;

const Title = styled.h3`
    color:#000;
`;

function Component3 (){
    return(
        <Wrapper>
            <Title>3. TypeScript를 이용하여 Form 구현하기</Title>
            <Forms />
        </Wrapper>
    )
}

export default Component3;