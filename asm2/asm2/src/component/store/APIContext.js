import { createContext } from "react";
//======================
const APIContext =createContext({
    HttpImg: '',
    link_API: [],
    err:'',
    isload:'',
    searchApi:''

});
export default APIContext;