import Cookies from "js-cookie";
const setCookie = (cookiesName,usrin)=>{
    Cookies.set(cookiesName,usrin,{
        expires:1,
        secure:true,
        sameSite:'strict',
        path:'/'

    })
}
export default setCookie