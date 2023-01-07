import *as requestFilmsLevel2 from "~/utills/httpRequest";
export const Level2API  = async()=>{
    try {
        const res = await requestFilmsLevel2.getFilmLevel2('Level-2')
        return res
    } catch (error) {
        console.log(error)
    }
}