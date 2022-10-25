import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// react V6 이전
// -> interface 를 만들어준 후 userParams 의 type을 typescript이용해 선언해준다.
// interface RouteParams {
//     coinId: string;
// }

const Title = styled.h1`
    margin-bottom:20px;
    font-size:35px;
    font-weight:bold;
    color:${props=>props.theme.accentColor};
`;

const Container = styled.div`
    max-width:320px;
    margin:40px auto;
    padding:0 20px;
`;

const Header = styled.header`
    text-align:center;
`;
const Loader = styled.p`
    font-size:30px;
    font-weight:bold;
    text-align:center;
`;

interface RouteParams {
    coinId : string;
}
interface RouteState {
    name : string;
}

function Coin(){
    // react V6 이전
    // const {coinId} = useParams<RouterParams>();

    // react V6 이후 
    // -> V6로 업데이트부터는 useParams에 String | undefined가 default값으로 지정되어 interface로 지정 시 'String, String | undefined'로 타입이 지정되어 오류가 나기 때문에 변경 전 문법으로 사용할 수 없다.

    // [오류 해결 방법]
    // -> const {coinId} = useParams() as unknown as RouteParams; // ==> as unknown as interface명; => unknown && interface명 둘다 허용한다는 뜻이다. 
    //                                                                   data as Item;              => data에 Item을 할당할 수 있다. => console.log(결과) : Item , Item | data
    //                                                                   unknown as Item;           => 무엇이든 할당할 수 있다.      => console.log(결과) : Item , Item | data   
    const {coinId} = useParams<"coinId">(); // == const { coinId } = useParams< { coinId:string } >();
    // console.log(coinId)
    const [loading, setLoading] = useState(true);
    const location  = useLocation();
    const state = location.state as RouteState;     // interface 활용 방법
    // console.log(state.name)

    useEffect(()=>{
        (async() =>{
            // const response = await fetch(`https://api.coinpaprika.com/v1/${coinId}`);
            // const json = await response.json();

            //  위 코드를 캡슐화한 문법
            const response = await(await fetch(`https://api.coinpaprika.com/v1/${coinId}`)).json();
            console.log(response)
        })();
    }, []);

    return (
        <Container>
            <Header>
                {/* 시크릿 창에서 상세 페이지 url을 열면 state값을 못 받아와 에러나기 때문에 에러 방지 loading을 넣어준다. */}
                <Title>{state?.name || "Loading..."}</Title>    
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}
        </Container>
    )
}

export default Coin;