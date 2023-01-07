import classNames from 'classnames/bind';
import Style from './footerItem.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(Style);
function FooterItem({ content = false, children }) {
    return (
        <ul className={cx('footer-Item')}>
            <li className={cx('footer-list')}>
               
                    <img src={images.logo}></img>
                    
                        PhimLearning là trang xem phim miễn phí đầu tiên tối đa hoá trải ngiệm người dùng cho việc nâng
                        cao trình độ tiếng anh với phụ đề song ngữ và cơ chế điều khiển thông minh. Giúp người học trau
                        dồi khả năng phát âm, luyện nói, luyện nghe và vốn từ vựng của mình một cách nhanh chóng khi xem
                        phim.
                  
               
            </li>
            <li className={cx('footer-list')}>
                

                <a className={cx('footer-title')}>Bạn cũng muốn xem</a>
                
                <p>Top phim học tiếng Anh hay nhất Những phim Tiếng Anh đặc sắc nhất Blog - Review phim</p>
            </li>
            <li className={cx('footer-list')}>
                <a className={cx('footer-title')}>Quy Định</a>
                <p>Điều khoản sử dụng</p>
                <p>Chính sách và quyền riêng tư</p>
                <p>Bản quyền và trách nhiệm</p>
            </li>
            <li className={cx('footer-list')}>
                <a className={cx('footer-title')}>Học tiếng anh</a>
                <p>Cách học tiếng anh qua ahim</p>
                <p>tắt cả ahim</p>
                <p>Hỗ trợ</p>
            </li>
        </ul>
    );
}

export default FooterItem;
