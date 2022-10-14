import { BrowserRouter, Routes, Route} from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import StudyComponent from "../study/Study";

function Router(){
    return (
        // react V6 이전 문법
        // <BrowserRouter>
        //     <Switch>
        //         <Route path="/" component={Coin} />
        //     </Switch>
        // </BrowserRouter>

        // react V6 문법
        // - Switch => Routes 변경
        // - component => element 변경
        <BrowserRouter>
            <Routes>
                <Route path="/study" element={<StudyComponent/>} />
                <Route path="/:coinId" element={<Coin/>} />
                <Route path="/" element={<Coins/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;