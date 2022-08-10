import styled from "styled-components";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

const Title = styled.h3`
  margin-bottom: 10px;
`;

const Box = styled.div`
  margin-bottom: 40px;
`;

function Study() {
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
      <Box>
        <Title>3. styled-components 이용 - animation 만들기, nesting 이용하여컴포넌트 안 자식 선택</Title>
        <Component3 />
      </Box>
      <Box>
        <Title>4. styled-components - themes 이용 - dark모드 만들기 1/2</Title>
        <Component4 />
      </Box>
    </div>
  );
}

export default Study;
