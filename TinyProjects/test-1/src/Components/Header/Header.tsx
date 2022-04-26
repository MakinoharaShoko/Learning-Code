import {MainHeader} from "./MainHeader/MainHeader";
import {SubHeader} from "./SubHeader/SubHeader";

/**
 * 顶栏，分为主顶栏（时空裂缝、英雄之黎明）、副顶栏（英雄、装备、羁绊、小小英雄）
 * @constructor Header
 */
export const Header = ()=>{
    return <div style={{width:'100%'}}>
        <MainHeader/>
        <SubHeader/>
    </div>
}