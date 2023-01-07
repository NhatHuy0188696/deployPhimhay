
import * as requestMovie from '~/utills/httpRequest';
export const TrendingAPI = async()=>{
    try {
        const res = await requestMovie.getMovie('movie');
       return res
    } catch (error) {
       
    }

}