import classNames from 'classnames/bind';
import Style from './expensive.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import FooterItem from '../../Footer/footerItem';
const cx = classNames.bind(Style);
function Expensive() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('expensive-title')}>
                <h1>Tham gia trải nghiệm ngay phương pháp học tiếng Anh hot nhất hiện nay.</h1>
                <Button larger>Mình tham gia</Button>
            </div>
            <div className={cx('expensive-image')}>
                <img src={images.expensive}></img>
            </div>
        </div>
    );
}

export default Expensive;
