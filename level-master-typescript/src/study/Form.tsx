import React, { useState } from "react";
import styled from "styled-components";

function Forms(){
    const [value, setValue] = useState("");

                   // event type은 any(모든 될 수 있다.) => typeScript 에서는 any를 배제하고자 노력해야한다. => 이유는 any를 기본적으로 사용하는 것은 javascript.
                   // event : React.FormEvent<이벤트에 보낼 Element> => 이벤트에 보낼 Element를 event에 보내기 때문에 이벤트를 보호할 수 있다.또한 useState를 보호 할 수 있다.
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);     // event.currentTarget 과 event.target 의 차이점은 -> ReactJs Typescript 사람들은 currentTarget 사용을 선택했기 때문.
                                                    // currentTarget과 target 요소는 동일하다.
        const {
            currentTarget : {value}
        } = event;
        // 동일한 표현으로는 아래와 같다.(위 표현은 변수가 여러 개일 경우 사용하면 장점인 문법)
        // == 동일한 표현 1.  const value = event.currentTarget.value; 
        // == 동일한 표현 2.  const {value} = event.currentTarget;

        setValue(value);    // input type 이 text이기 때문에 string 으로 받는다.
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();     // 기본 클릭 동작 방지
        console.log("hello", value);
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                value={value}
                onChange={onChange} 
                type="text" 
                placeholder="username" 
            />
            <button>Login</button>
        </form>
    )
}

export default Forms;