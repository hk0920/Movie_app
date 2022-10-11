import { DefaultTheme } from "styled-components";

// Theme.tsx 파일은 테마 모읍집이라고 생각하면 좋다.

// styled.d.ts 파일에 지정해둔 type과 동일해야한다.
export const lightTheme : DefaultTheme = {
    bgColor:"white",
    textColor:"black",
    btnColor:"tomato",
}

export const darkTheme : DefaultTheme = {
    bgColor:"black",
    textColor:"white",
    btnColor:"teal",
}