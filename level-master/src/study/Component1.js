import styled from "styled-components";

// styled-components를 이용한 style 만들기 - styled.html태그`css스타일`
const Father = styled.div`
  display:flex;
`;

// props로 받아 컴포넌트 설정
const Box = styled.div`
  width:100px;
  height:100px;
  background-color:${(props) => props.bgColor};
`;

// Box 스타일 컴포넌트를 확장시켜 스타일 추가 (Box 컴포넌트 스타일 + Circle 컴포넌트 스타일)
// - styled(확장하려는 컴포넌트 명)`css스타일`
const Circle = styled(Box)`
  border-radius:50%;
`;

function Component1(){
    return (
        <Father>
            <Box bgColor="teal" />
            <Circle bgColor="tomato" />
        </Father>
    )
}

export default Component1;