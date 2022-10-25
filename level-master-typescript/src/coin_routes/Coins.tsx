import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    max-width:320px;
    margin:40px auto;
    padding:0 20px;
`;

const Header = styled.header`
    text-align:center;
`;

const Title = styled.h1`
    margin-bottom:20px;
    font-size:35px;
    font-weight:bold;
    color:${(props) => props.theme.accentColor};    
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    margin-bottom:15px;
    color:${(props)=>props.theme.bgColor};
    border-radius:8px;
    background-color:${(props)=>props.theme.textColor};
    overflow:hidden;

    a {
        display:flex;
        width:100%;
        height:100%;
        padding:15px 20px;
        line-height:20px;
        transition:color 0.2s ease-in;
        align-items:center;
    }

    &:hover {
        a {
            font-weight:bold;
            background-color:${(props)=>props.theme.accentColor};
        }
    }
`;

const Loader = styled.p`
    font-size:30px;
    font-weight:bold;
    text-align:center;
`;

const Img = styled.img`
    width:30px;
    margin-right:10px;
    vertical-align:top;
`;

// 가상 코인 배열
// const coins = [
//     { "id": "btc-bitcoin", "name": "Bitcoin", "symbol": "BTC", "rank": 1, "is_new": false, "is_active": true, "type": "coin" },
//     { "id": "eth-ethereum", "name": "Ethereum", "symbol": "ETH", "rank": 2, "is_new": false, "is_active": true, "type": "coin" },
//     { "id": "usdt-tether", "name": "Tether", "symbol": "USDT", "rank": 3, "is_new": false, "is_active": true, "type": "token" }
// ]

// 1. interface 로 값의 type 지정하기
interface CoinInterface {
    id : string;
    name : string;
    symbol : string;
    rank : number;
    is_new : boolean;
    is_active : boolean;
    type : string;
}

function Coins(){
    // 배열로 받기 떄문에 interface도 배열로 선언[] / useState값이 빈 배열로 선언 []
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    // useEffect 로 component life의 시작점에서만 시작하도록 하고 싶을 경우 (처음으로 시작될 때 ★ 1번만!)
    // 2. api 가져오기
    useEffect(()=>{
        (async() =>{
            const response = await fetch("https://api.coinpaprika.com/v1/coins", {
                method:"POST",
                headers: new Headers({
                    'content-type': 'application/json'
                }),
            });
            const json = await response.json();
            // console.log(json);
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinList>
                {loading ? <Loader>Loading...</Loader> : 
                coins.map(coin => (
                    <Coin key={coin.id}>
                        {/* 
                            a태그는 새로고침이 되므로 Link 태그로 사용한다.
                            Link to = {이동하고 싶은 url} 
                        */}
                        {/* v6에서 Link 안의 state 값 문법 비교 
                            - 기존 문법 : <Link to={{ pathname:`/${coin.id}`, state: {name:coin.name} }}
                            - v6 문법 : <Link to={{pathname: `/${coin.id}`}} state={{name : coin.name}} >
                        */}
                        <Link to={{ pathname: `/${coin.id}` }} state={{name : coin.name}} >
                            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="" />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))
                }
            </CoinList>
        </Container>
    )
}

export default Coins;