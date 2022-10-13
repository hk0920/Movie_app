import { useParams } from 'react-router';

// react V6 이전
// -> interface 를 만들어준 후 userParams 의 type을 typescript이용해 선언해준다.
// interface RouteParams {
//     coinId: string;
// }

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
    console.log(coinId)
    return <h1>Coin : {coinId}</h1>
}

export default Coin;