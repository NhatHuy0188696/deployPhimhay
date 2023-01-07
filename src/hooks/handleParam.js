import setCookie from '~/hooks/setCookie';
export  const handleParam = (data) =>{
    if(data != undefined){
        setCookie ('usrin',JSON.stringify(data))
      
    }
    else{
        setCookie('usrin', '');
    }
   return data
}