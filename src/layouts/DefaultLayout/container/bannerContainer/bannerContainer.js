import classNames from 'classnames/bind';
import Styles from './bannerContainer.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerItem from './bannerItems';

const cx = classNames.bind(Styles);
function BannerContainer({ dataslick = [], children }) {
    const banner = () => {
        return dataslick.map((dataBanner, index) => <BannerItem data={dataBanner} key={index} />);
    };
    let dost = dataslick.map((slider, index) => {
        return slider.thumbnail;
    });
    return (
        <div className={cx('wrapper-banner')}>
            <Slider
                autoplay
                autoplaySpeed={5000}
                dots
                arrows={false}
                infinite
                appendDots={(dost) => <ul>{dost}</ul>}
                customPaging={(i) => {
                    return (
                        <div className={cx('dost-image')}>
                            <img
                                src={dost[i]}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            ></img>
                        </div>
                    );
                }}
                dotsClass={cx('slick-dots', ['customIndicator'])}
            >
                {banner()}
               
            </Slider>
            {children}
        </div>
    );
}
export default BannerContainer;
