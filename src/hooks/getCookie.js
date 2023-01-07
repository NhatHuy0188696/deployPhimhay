import Cookies from "js-cookie";
const getCookie = (cookiesName)=>{
   return Cookies.get(cookiesName)
}
export default getCookie