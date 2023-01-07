import classNames from "classnames/bind";
import Style from './Search.module.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";


const cx = classNames.bind(Style)
function SearchResult({data}) {
    const [param,setParam] = useState()
    const LocalStores = JSON.parse(localStorage.getItem('params'))
    const [params,setParams] = useState(LocalStores)
    useEffect(()=>{
        if(param){
            setParams(()=>{
                const jsonParam = JSON.stringify(param)
                localStorage.setItem('params',jsonParam)
            })
            setParams('')
        }
    },[param])
    
    return (  
        <li className={cx('movie-thumb')}  >
        <a href={`/SearchMovieDetail/${data.id}`  } onClick={()=>setParam(data)} >
        <div className={cx('logout')} >
            <div className={cx('img-thumb')}>
                <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt={data.title}></img>
            </div>
            
        </div>
        <h4 className={cx("title")}>
                {data.title}
            </h4>
        </a>
      
    </li>
    );
   
}
SearchResult.prototype = {
    data:PropTypes.object,
}
export default SearchResult;