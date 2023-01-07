import classNames from 'classnames/bind';
import Style from '../containerLevel.module.scss';
import TitleMovie from '../../titleMovie';
import images from '~/assets/images';
import * as apiFilmLevel3 from "~/Api/apiFilmLevel3"
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FilmLevelItem from '../filmLevelItem';
import SampleNextArrowLevel from '~/components/sampleNextArrowLevel';
import SamplePrevArrowLevel from '~/components/samplePrevArrowLevel';
import MovieItem from '../../movieItem';
import { handleParam } from '~/hooks/handleParam';
import { Usecreensize } from '~/hooks';
const cx = classNames.bind(Style);
function Filmlevel_3({ Level = false, Name = false,  }) {
    const [filmsLevel3, setFilmLevel3] = useState([]);
    const [detailFiml,setDetailFilm] = useState()
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await apiFilmLevel3.FilmsLevel3();

            setFilmLevel3(data);
        };
        fetchAPI();
    }, []);
    useEffect(()=>{
        handleParam(detailFiml)
    })
    return (
        <>
            <TitleMovie level={Level} name={Name} nextSub={images.nextSub}></TitleMovie>
            <Slider
                // dots={true}
                infinite={true}
                speed={500}
                slidesToShow={6}
                slidesToScroll={6}
                initialSlide={0}
                arrows={true}
                rows={2}
                nextArrow={<SampleNextArrowLevel />}
                prevArrow={<SamplePrevArrowLevel />}
                className={cx('slider-level')}
                responsive={[
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                        },
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                        },
                    },
                    {
                        breakpoint: 736,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                ]}
                dotsClass={cx('slick-dots', ['dots-movie'])}
            >
                {filmsLevel3.map((listMovie, index) => (
                    <a href={`MovieDetail/${listMovie.id}`} className={cx('movie-contaniner')} key={listMovie.id} onClick={()=>{setDetailFilm(listMovie)}}>
                        <FilmLevelItem>
                            <MovieItem col_full key={listMovie.id} data={listMovie} />
                        </FilmLevelItem>
                    </a>
                ))}
            </Slider>
        </>
    );
}

export default Filmlevel_3;
