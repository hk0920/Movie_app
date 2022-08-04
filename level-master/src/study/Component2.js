import styled from "styled-components";

const Father = styled.div`
    display:flex
`;

//  button 태그로 만든 Btn 컴포넌트를 a태그로 변경하고자 할 때 사용 하는 방법
//  Btn 속성안에 as="a" href="url" 추가
const Btn = styled.button`
    padding:5px 10px;
    font-size:16px;
    color:white;
    background-color:purple;
    border:0;
    border-radius:15px;
`;

// input이 여러개 있을 경우 input 속성값을 한번에 스타일 컴포넌트에서 설정할 수 있다.
// .attrs({속성 : 속성값})
const Input = styled.input.attrs({required: true, minLength: 10})`
    background-color:whitesmoke;
`;

function Component2(){
    return (
        <Father as="article">
            <Btn>Log in</Btn>
            <Btn as="a" href="/">Go Home</Btn>

            {/* input이 여러개 있을 경우 input 속성값을 한번에 스타일 컴포넌트에서 설정할 수 있다. */}
            {/* <Input required="true" /> */}
            <Input />
            <Input />
            <Input />
            <Input />
        </Father>
    )
}

export default Component2;