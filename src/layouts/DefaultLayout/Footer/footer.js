import classNames from 'classnames/bind';
import Style from './footer.module.scss';
import images from '~/assets/images';
import FooterItem from './footerItem';
const cx = classNames.bind(Style);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-content')}>
                <img className={cx('footer-image')} src={images.footer}></img>
                <FooterItem/>
            </div>
        </div>
    );
}

export default Footer;
