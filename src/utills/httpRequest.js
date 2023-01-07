import axios from 'axios';
// search
const request = axios.create({

    baseURL:'https://api.themoviedb.org/3/search/',
   
})
export const get = async(path,option={})=>{
    const response = await request.get(path,option);
    return response.data
}
// trending
const requestMovie = axios.create({

    baseURL:'https://63afb084cb0f90e5147836e2.mockapi.io/localhost/3000/level1/',
   
})
export const getMovie = async(path)=>{
    const response = await requestMovie.get(path);
    return response.data
}
// reatureFilm
const requestFeatureFilm = axios.create(
    {
        baseURL:'https://63afb084cb0f90e5147836e2.mockapi.io/localhost/3000/level1/'
    }
)
export const getFeatureFilm = async(path)=>{
    const response = await requestFeatureFilm.get(path)
    return response.data
}
// level 1
const requestFilmsLevel1 = axios.create(
    {
        baseURL:'https://63afb084cb0f90e5147836e2.mockapi.io/localhost/3000/level1/'
    }
)
export const getFilmLevel1 = async(path)=>{
    const response = await requestFilmsLevel1.get(path)
    return response.data
} 
// level 2
const requestFilmsLevel2 = axios.create(
    {
        baseURL: 'https://63afb084cb0f90e5147836e2.mockapi.io/localhost/3000/level1/'
    }
)
export const getFilmLevel2 = async(path)=>{
    const response = await requestFilmsLevel2.get(path);
    return response.data
}
// level 3
const requestFilmsLevel3 = axios.create(
    {
        baseURL:'https://63afbbedcb0f90e51479237c.mockapi.io/',
    }
)
export const getFilmLevel3 = async(path)=>{
    const response = await requestFilmsLevel3.get(path)
    return response.data
}
const requestFeeback= axios.create(
    {
    baseURL:'https://63afbbedcb0f90e51479237c.mockapi.io/',
})
export const getRequestFeedback = async(path)=>{
    const response = await requestFeeback.get(path)
    return response.data
}
export{
    request,
    requestMovie,
    requestFeatureFilm,
    requestFilmsLevel1,
    requestFilmsLevel2,
    requestFilmsLevel3,
    requestFeeback
} 
