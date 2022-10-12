import { createContext } from "react";
//======================
const Searchcontext =createContext({
    inputSearch:'',
    btnSearch:item=>{},
    btnReset:item=>{}

});
export default Searchcontext;