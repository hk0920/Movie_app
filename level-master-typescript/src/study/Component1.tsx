import styled from "styled-components";

// Type Script - Java Script를 기반으로 한 언어  + 새로운 기능 (문법이 Java Script와 동일)
//             - 다만 Type Script는 strongly-type 언어라 프로그래망 언어가 작동하기 전 type을 확인한다.
//             - Type Script의 확장자는 .ts / react에서는 tsx

// TypeScript 프로젝트 생성 명령어
// 처음 프로젝트 만들 경우 : npx create-react-app "만들 앱 명" --template typescript
// 기존 react 앱에 TypeScript를 적용하여 만들 경우 : npm install --save typescript @types/node @types/react @types/react-dom @types/jest
//  ㄴ .js 확장자를 .tsx로 변경 => 변경 후 에러 잡은 후 작업 진행

// TypeScript는 styled-components 설치 전엔 모르기 때문에 npm 으로 설치해준다.
// 명령어 : npm i --save-dev @types/styled-components

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

function Component1(){
    return (
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
    )
}

export default Component1;