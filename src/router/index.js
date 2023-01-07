import Home from '~/pages/Home/';
import Movie from '~/pages/Movie/';
import SearchMovieDetai from '~/pages/SearchMovieDetail/SearchMovieDetail';
import MovieDetail from '~/pages/MovieDetail/MovieDetail';
import Mystery from '~/pages/Mystery';
import config from '~/config';

const publicRouter =[
    {path:config.routes.home, component: Home},
    {path:config.routes.movie, component: Movie },
    {path:config.routes.Mystery,component: Mystery,layout:null },
    {path:config.routes.SearchMovieDetail,component:SearchMovieDetai,layout:null},
    {path:config.routes.MovieDetail,component:MovieDetail,layout:null}
   ,
]
export {publicRouter};