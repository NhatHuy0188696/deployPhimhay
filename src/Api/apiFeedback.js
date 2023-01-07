import * as requestFeeback  from "~/utills/httpRequest";
export const APIFeedback = async () =>{
    try {
        const res = await requestFeeback.getRequestFeedback('feedback')
        return res
    } catch (error) {
        console.log(error)
    }
   
} 