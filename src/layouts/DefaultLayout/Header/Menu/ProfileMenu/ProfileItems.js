import classNames from 'classnames/bind';
import Style from './ProfileMenu.module.scss';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import ProfileItems from './ProfileItems';
import PropTypes from 'prop-types';
const cx = classNames.bind(Style);
function ProfileMenu({ children, Profiles = [] }) {
    const ProfileMenu = () => {
        return Profiles.map((Profile, index) => <ProfileItems key={index} data={Profile} />);
    };
    return (
        <Tippy
            placement="bottom"
            interactive
            trigger="click"
            render={(attrs) => (
                <div className={cx('profile')} tabIndex="-1" {...attrs}>
                    <div className={cx('profile-infor')}>
                        <div className={cx('profile-image')}>
                            <div className={cx('current-image')}>
                                <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=382132787219609&height=160&width=160&ext=1656162059&hash=AeTzPkNadfNuVqzEduM" />
                                <div className={cx('user-level')}>Basic</div>
                            </div>
                            <div className={cx('profile-name')}>Nhật Huy</div>
                        </div>
                        <div className={cx('order-section')}>
                            <ul>{ProfileMenu()}</ul>
                        </div>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
ProfileMenu.prototype = {
    children:PropTypes.object,
    Profiles:PropTypes.object,
}
export default ProfileMenu;
