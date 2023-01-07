import Cookies from "js-cookie"
const RemoveCookie = (Cookiename)=>{
    return Cookies.remove(Cookiename);
}
export default RemoveCookie