import *as requestFilmsLevel1 from "~/utills/httpRequest";
export const Level1API  = async()=>{
    try {
        const res = await requestFilmsLevel1.getFilmLevel1('Level-1')
        return res
    } catch (error) {
        console.log(error)
    }
}