import styled from "styled-components";

// ContainerProps 선언
// CircleProps와 ContainerProps가 동일한 interface기 때문에 둘 중 하나 삭제해도 상관없다.
// interface ContainerProps{
//     bgColor : string;
    
// }

// 선언한 interface를 styled-component에 알려주려면 styled.div<interface 명>` styled `;
const Container = styled.div<CircleProps>`
    display:inline-block;
    width:100px;
    height:100px;
    margin:0 10px;
    border-radius:50%;
    background:${props => props.bgColor};
    border-weight:5px;
    border-style:solid;
    border-color:${props => props.borderColor};
`;

// bgColor를 interface를 안해주면 bgColor가 뭔지 모르기 때문에 에러난다.
// 전에 배운 props 선언 :  ex ) const x = (a:number, b:number) => a+b

// interface : 객체 모양을 typeScript에 설명해주는 TypeScript 개념이다.
//              props의 type을 선언

interface CircleProps {
    bgColor : string;        // default props : ':'
    borderColor ?: string;   // 옵션 props만들기 : '?:' 를 넣어주면 props의 값이 선택적이다.
}

// interface는 함수명 (props : interface){} 로 사용
//             함수명 ({props 명} : interface 명){} 로 사용

// props 와 interface의 차이점 : interface는 TypeScript와 코드가 실행되기 "전"에 확인해준다.
//                              props는 코드 실행 "후" 브라우저에 에러 

function Circle(props : CircleProps) {
    return (
        <Container bgColor={props.bgColor} borderColor={props.borderColor} />
    )
}

export default Circle;



// 연습 예시
interface playerShape {
    age:number;
    name:string;
}

const sayHello = (playerObj : playerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({age:31, name:"HeeGue"});
// sayHello({age:12, name:"JiSun", hello:1}); // hello가  playerShape에 없기 때문에 error