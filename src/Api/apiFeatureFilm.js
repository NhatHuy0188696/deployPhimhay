import * as requestFeatureFilm  from "~/utills/httpRequest";
export const FeatureAPI = async()=>{
    try {
        const res = await requestFeatureFilm.getFeatureFilm(`Feature`,{
           
            
        })
        return res
    } catch (error) {
        console.log(error)
    }
}