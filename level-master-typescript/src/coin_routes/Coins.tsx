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

const CoinList = styled.ul`

`;

const Coin = styled.li`
    margin-bottom:15px;
    color:${(props)=>props.theme.bgColor};
    border-radius:8px;
    background-color:${(props)=>props.theme.textColor};
    overflow:hidden;

    a {
        display:block;
        width:100%;
        height:100%;
        padding:15px 20px;
        transition:color 0.2s ease-in;
    }

    &:hover {
        a {
            font-weight:bold;
            background-color:${(props)=>props.theme.accentColor};
        }
    }
`;

const coins = [
    { "id": "btc-bitcoin", "name": "Bitcoin", "symbol": "BTC", "rank": 1, "is_new": false, "is_active": true, "type": "coin" },
    { "id": "eth-ethereum", "name": "Ethereum", "symbol": "ETH", "rank": 2, "is_new": false, "is_active": true, "type": "coin" },
    { "id": "usdt-tether", "name": "Tether", "symbol": "USDT", "rank": 3, "is_new": false, "is_active": true, "type": "token" }
]


function Coins(){
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinList>
                {coins.map(coin => (
                    <Coin key={coin.id}>
                        {/* 
                            a태그는 새로고침이 되므로 Link 태그로 사용한다.
                            Link to = {이동하고 싶은 url} 
                        */}
                        <Link to={"/" + coin.id}>
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinList>
        </Container>
    )
}

export default Coins;