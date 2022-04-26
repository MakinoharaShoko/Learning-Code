import {MainHeader} from "./MainHeader/MainHeader";
import {SubHeader} from "./SubHeader/SubHeader";

export const Header = ()=>{
    return <div style={{width:'100%'}}>
        <MainHeader/>
        <SubHeader/>
    </div>
}