import Header from '~/layouts/DefaultLayout/Header';
import BannerContainer from '~/layouts/DefaultLayout/container/bannerContainer/bannerContainer';
import Footer from '~/layouts/DefaultLayout/Footer';
import LayoutDetail from '~/layouts/DefaultLayout/container/layoutDetail';
import { useEffect, useState } from 'react';
import PlayRing from '~/components/playRing/playRing';




function SearchMovieDetail() {
    const getLocalStores = JSON.parse(localStorage.getItem('params'));
    const [dataDetail, setDataDetail] = useState([]);
    useEffect(() => {
        if (dataDetail !== []) {
            setDataDetail([getLocalStores]);
        }
    }, []);
    return (
        <>
            <Header></Header>
            <BannerContainer dataslick={dataDetail}> 
                   <PlayRing></PlayRing>
            </BannerContainer>
            <LayoutDetail/>
            
        </>
    );
}

export default SearchMovieDetail;
