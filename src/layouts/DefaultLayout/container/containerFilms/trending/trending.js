import React, { Component, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import Boxlevel from '~/components/boxLevel';
import TitleMovie from '../titleMovie';
import classNames from 'classnames/bind';
import Style from './trending.module.scss';
import * as apiTrending from '~/Api/apiTrending';
import images from '~/assets/images';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import MovieItem from '../movieItem';
import { Usecreensize } from '~/hooks';

const cx = classNames.bind(Style);

function Trending({ children }) {
    const [trending, setTrending] = useState([]);
    const newWidth = Usecreensize(window.innerWidth);
    useEffect(() => {
        let setshowMovie = false;
        if (newWidth <= 1300 ? setshowMovie === true : (setshowMovie = false));
    }, [newWidth]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await apiTrending.TrendingAPI();
            setTrending(data);
        };
        fetchAPI();
    }, []);
    return (
        <>
            <Slider dots arrows={false} infinite dotsClass={cx('slick-dots', ['dots-movie'])}>
                {children}
                {trending.map((ListMovie, index) => (
                    <TitleMovie name={'Trending'} logo={images.trending} nextSub={images.nextSub} key={ListMovie.id}>
                        <div className={cx('movie-contaniner')}>
                            <div className={cx('movie-list')}>
                                <MovieItem key={ListMovie.id} data={ListMovie} />
                                <div className={cx('trending-col_2')}>
                                    {ListMovie.MovieChildren.map((childrenList, index) => (
                                        <MovieItem  key={childrenList.id} col_2 data={childrenList} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TitleMovie>
                ))}
            </Slider>
        </>
    );
}

export default Trending;
