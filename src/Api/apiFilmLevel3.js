import *as requestFilmsLevel3 from "~/utills/httpRequest";
export const FilmsLevel3 = async () =>{
    try {
        const res = await requestFilmsLevel3.getFilmLevel3('Level-3')
        return res
    } catch (error) {
        console.log (error)
    }
}