import Header from '~/layouts/DefaultLayout/Header';
import BannerContainer from '~/layouts/DefaultLayout/container/bannerContainer';
import LayoutDetail from '~/layouts/DefaultLayout/container/layoutDetail/layoutDetail';
import * as FeatureAPI from '~/Api/apiFeatureFilm';
import getCookie from '~/hooks/getCookie';
import PlayRing from '~/components/playRing/playRing';
import { useEffect, useState } from 'react';
function MovieDetail() {
    const cookieFeature = JSON.parse(getCookie('usrin'));
    const FeatureParam = [cookieFeature];

    return (
        <>
            <Header></Header>
            <BannerContainer dataslick={FeatureParam}>
                <PlayRing></PlayRing>
            </BannerContainer>
            <LayoutDetail />
        </>
    );
}

export default MovieDetail;
