import styled, { keyframes } from "styled-components";

// styled-component 이용한 animation 만들기
const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
    0% {
        transform:rotate(0);
        border-radius:0;
    }
    50% {
        border-radius:100px;
    }
    100% {
        transform:rotate(360deg);
        border-radius:0;
    }
`;

const Emoji = styled.span`
    font-size:30px;
`;

const Box = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  background: pink;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s linear infinite;

  /* sass의 nesting 이용해 Box 컴포넌트 안의 태그들 style도 설정할 수 있다. */
  /* 1. html 태그로 써도 가능 / 컴포넌트 선택자로 써도 가능 */
  /* span {
    font-size: 30px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0.5;
    }
  } */

  /* 
    2. A컴포넌트 안에 자식선택자로  B컴포넌트를 불러 올 때 선택자는 $ + { + 컴포넌트명 + } (+ 삭제)
       장점 - html 태그로 설정했을 경우는 다른 tag가 들어갔을 경우 스타일이 안먹지만, 컴포넌트 불러올 때 as속성으로 태그를 변경할 수 있다.
  */
  ${Emoji}{
    &:hover{
        font-size:50px;
    }
    &:active{
        opacity:0.5;
    }
  }
`;

function Component3() {
  return (
    <Wrapper>
      <Box>
        {/* 1. html 태그 방식
            <span>😍</span> 
        */}

        {/* 2. 컴포넌트 방식 */}
        <Emoji as="p">😍</Emoji>
      </Box>
    </Wrapper>
  );
}

export default Component3;
