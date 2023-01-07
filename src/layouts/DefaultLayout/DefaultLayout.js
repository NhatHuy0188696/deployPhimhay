import classNames from 'classnames/bind';
import Styles from './DefaultLayout.module.scss';
import Header from './Header';
import Container from './container';

import Footer from './Footer';
import PropTypes from 'prop-types';
const cx = classNames.bind(Styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Container />
            </div>
            {children}
            <footer className={cx('footer')}>
                <Footer />
            </footer>
        </div>
    );
}
DefaultLayout.prototype = {
    children:PropTypes.node.isRequired
}
export default DefaultLayout;
