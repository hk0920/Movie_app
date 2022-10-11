import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:50px;
    height:50px;
`;

function Counter() {
    // useState 는 [변수 , set변수명] = useState(default값); => default값이 빈값이면 undefined로 typeScript가 추론할 수 없다.
    // counter 위에 마우스를 가져다대면 counter의 type이 나온다.(typeScript가 초기값을 추론한 데이터 형식)
    const [counter, setCounter] = useState(1);

    // string 또는 number 타입이 들어가게 하고 싶다면!?
    const [value, setValue] = useState<number | string>(0);

    // setCounter를 하면 reRendering 되면서 state값 변경.
    useEffect(()=>{
        setCounter(2);
            
        setValue(123);
        setValue("hi");
        // setValue(true);  // boolean 값이 들어갈 수 없어 error (string, number만 들어갈수 있다.)
    },[])
    
    // setCounter("hello"); // counter의 type이 number인데 string이 들어왔기 때문에 error
    
    return (
        <Container>
            {counter} || {value}
        </Container>
    )
}

export default Counter;