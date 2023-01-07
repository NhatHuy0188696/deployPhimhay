import classNames from 'classnames/bind';
import Style from './featureFilm.module.scss';
import images from '~/assets/images';
import * as apiFeatureFilm from '~/Api/apiFeatureFilm';
import TitleMovie from '../titleMovie/titleMovie';
import MovieItem from '../movieItem';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import SampleNextArrow from '~/components/SampleNextArrow';
import SamplePrevArrow from '~/components/SamplePrevArrow';
import setCookie from '~/hooks/setCookie';
import { handleParam } from '~/hooks/handleParam';
import { Usecreensize } from '~/hooks';

const cx = classNames.bind(Style);
function FeatureFilm({ children }) {
   
    const [featureFilms, setFeatureFilms] = useState([]);
    const [featureDetail,setFeatureDetail] = useState()
    useEffect(() => {
        const fetchApi = async () => {
            const data = await apiFeatureFilm.FeatureAPI();
            setFeatureFilms(data);
        };
        fetchApi();
    }, []);
   
    useEffect(()=>{
       handleParam(featureDetail)
    },[featureDetail])
    return (
        <>
            <TitleMovie name={'Phim lẻ cập nhật'} logo={images.recently} nextSub={images.nextSub}></TitleMovie>
            <div className={cx('featureFilm')}>
                <Slider
                    // dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={6}
                    slidesToScroll={6}
                    initialSlide={0}
                    arrows={true}
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
                                nextArrow: <SampleNextArrow />,
                                prevArrow: <SamplePrevArrow />,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                nextArrow: <SampleNextArrow />,
                                prevArrow: <SamplePrevArrow />,
                            },
                        },
                        {
                            breakpoint: 599,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                nextArrow: <SampleNextArrow />,
                                prevArrow: <SamplePrevArrow />,
                            },
                        },
                    ]}
                    dotsClass={cx('slick-dots', ['dots-movie'])}
                >
                    {children}
                    {featureFilms.map((featureFilm, index) => (
                        <a href={`MovieDetail/${featureFilm.id}`} className={cx('movie-contaniner')} key={featureFilm.id}>
                            <div className={cx('movie-list')} onClick={()=>{setFeatureDetail(featureFilm)}}>
                                <MovieItem col_full key={featureFilm.id} data={featureFilm} />
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default FeatureFilm;
