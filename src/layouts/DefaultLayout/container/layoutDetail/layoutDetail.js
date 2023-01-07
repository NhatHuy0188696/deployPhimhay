import Feedback from '~/layouts/DefaultLayout/container/feedback/feedback';
import Expensive from '~/layouts/DefaultLayout/container/expensive/expensive';
import Footer from '../../Footer';
import classNames from 'classnames/bind';
import Styles from './layoutDetail.module.scss';
const cx = classNames.bind(Styles);
function LayoutDetail() {
    return (
        <>
            <div className={cx('container-detail')}>
                <Feedback></Feedback>
                <div className={cx('expensive-detail')}>
                    <Expensive></Expensive>
                </div>
            </div>
            <div className={cx('footer-detail')}>
                <Footer></Footer>
            </div>
        </>
    );
}

export default LayoutDetail;
