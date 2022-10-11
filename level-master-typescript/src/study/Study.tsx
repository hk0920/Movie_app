import styled from "styled-components";
import Circle from "./Circle";
import Counter from "./Counter";
import Forms from "./Form";
import ThemeComponent from "./ThemeComponent";

// Type Script - Java Script를 기반으로 한 언어  + 새로운 기능 (문법이 Java Script와 동일)
//             - 다만 Type Script는 strongly-type 언어라 프로그래망 언어가 작동하기 전 type을 확인한다.
//             - Type Script의 확장자는 .ts / react에서는 tsx

// TypeScript 프로젝트 생성 명령어
// 처음 프로젝트 만들 경우 : npx create-react-app "만들 앱 명" --template typescript
// 기존 react 앱에 TypeScript를 적용하여 만들 경우 : npm install --save typescript @types/node @types/react @types/react-dom @types/jest
//  ㄴ .js 확장자를 .tsx로 변경 => 변경 후 에러 잡은 후 작업 진행

// TypeScript는 styled-components 설치 전엔 모르기 때문에 npm 으로 설치해준다.
// 명령어 : npm i --save-dev @types/styled-components
//         npm install --save styled-components

// theme - 기본적으로 모든 색상들을 가지고 있는 object

const Box = styled.div`
    margin-bottom:50px;
`;

const Title = styled.h3`
    color: ${(props) => props.theme.textColor};
`;

function Component1(){
    return (
        <div>
            <Box>
                <Title>1. interface 이용하여 props 전달</Title>
                <Circle bgColor="teal" />
                <Circle bgColor="tomato" borderColor="pink" text="i'm option."/>
            </Box>

            <Box>
                <Title>2. useState를 이용하여 state값 변경하기</Title>
                <Counter />
            </Box>

            <Box>
                <Title>3. TypeScript를 이용하여 Form 구현하기</Title>
                <Forms />
            </Box>

            <Box>
                <Title>4. theme, styledComponent 이용하여 배경 변경하기</Title>
                <ThemeComponent />
            </Box>
        </div>
    )
}

export default Component1;