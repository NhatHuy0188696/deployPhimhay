import classNames from 'classnames/bind';
import Style from './menu.module.scss';

import { useState, useRef, useEffect } from 'react';
import TopicNarbar from './TopicNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Search from './Search';
import Button from '~/components/Button';
import ProfileMenu from './ProfileMenu';
import PropTypes from 'prop-types';
import { Usecreensize } from '~/hooks';
const cx = classNames.bind(Style);
const MENU_ITEM = [
    {
        id: 1,
        name: 'Bí ẩn',
        to: '/Movie',
    },
    {
        id: 2,
        name: 'Chiến Tranh',
        to: '/Movie',
    },
    {
        id: 3,
        name: 'Chiến Tranh - Chính trị',
        to: '/Movie',
    },
    {
        id: 4,
        name: 'Drama',
        to: '/Movie',
    },
    {
        id: 5,
        name: 'Gia đình',
        to: '/Movie',
    },
    {
        id: 6,
        name: 'Giả tưởng - Thần thoại',
        to: '/Movie',
    },
    {
        id: 7,
        name: 'Hài',
        to: '/Movie',
    },
    {
        id: 8,
        name: 'Hành Động',
        to: '/Movie',
    },
    {
        id: 9,
        name: 'Hoạt hình',
        to: '/Movie',
    },
];
const MENU_ITEM2 = [
    {
        id: 1,
        name: 'Khoa học giả tưởng',
        to: '/Movie',
    },
    {
        id: 2,
        name: 'Khoa học viên tưởng',
        to: '/Movie',
    },
    {
        id: 3,
        name: 'Kịch tính',
        to: '/Movie',
    },
    {
        id: 4,
        name: 'Kinh dị',
        to: '/Movie',
    },
    {
        id: 5,
        name: 'Lãng mạn',
        to: '/Movie',
    },
    {
        id: 6,
        name: 'Lịch sử',
        to: '/Movie',
    },
    {
        id: 7,
        name: 'Ngoại quốc',
        to: '/Movie',
    },
    {
        id: 8,
        name: 'Phiêu lưu',
        to: '/Movie',
    },
    {
        id: 9,
        name: 'Phiêu lưu - Hành động',
        to: '/Movie',
    },
];
const MENU_ITEM3 = [
    {
        id: 1,
        name: 'Tài liệu',
        to: '/Movie',
    },
    {
        id: 2,
        name: 'Thực tế',
        to: '/Movie',
    },
    {
        id: 3,
        name: 'Tội phạm',
        to: '/Movie',
    },
    {
        id: 4,
        name: 'Trẻ em',
        to: '/Movie',
    },
    {
        id: 5,
        name: 'Truyền hình',
        to: '/Movie',
    },
    {
        id: 6,
        name: 'Truyền hình thực tế',
        to: '/Movie',
    },
    {
        id: 7,
        name: 'Viễn tây',
        to: '/Movie',
    },
    {
        id: 8,
        name: 'Vụ đạo Âm nhạc',
        to: '/Movie',
    },
];
const MENU_PROFILE = [
    {
        id: 1,
        name: 'Trợ giúp',
    },
    {
        id: 2,
        name: 'Đăng xuất',
    },
];

function Menu({ children }) {
   
    const [typeButton, setTypeButton] = useState(false);
    const [menuMobile, setmenuMobile] = useState(false);
    const [height, setHeight] = useState();
    const [statusBars, setStatusBars] = useState(true);
    var buttonBars = useRef();
    const width = window.innerWidth
    const newSize = Usecreensize(width)
    useEffect(() => {
        //set type button on tablet and pc
        if (newSize <= 1300 ? setTypeButton(true) : setTypeButton(false));

        // set show bars on tablet
        if (newSize <= 1023 ? setmenuMobile(true) : setmenuMobile(false));
    }, [newSize]);
    const handHeightleMenu = () => {
        let newHeight = buttonBars.current;
        console.log(newHeight);
        if (!statusBars) {
            setHeight((newHeight = '68px'));
            setStatusBars(true);
        } else {
            setHeight((newHeight = '280px'));
            setStatusBars(false);
        }
    };
    const currentUser = false;
    
    return (
        <div
            className={cx('menu')}
            style={
                menuMobile && height === '280px'
                    ? {
                          minHeight: height,
                          overflow: 'visible',
                          transition: 'all 0.2s',
                      }
                    : {}
            }
        >
            {children}
            <ul className={cx('navbar')}>
                <li className={cx('item', ['topic'])}>
                    <TopicNarbar items={MENU_ITEM} items2={MENU_ITEM2} items3={MENU_ITEM3}>
                        <a className={cx('topic-title')}>
                            Chủ đề
                            <span>
                                <FontAwesomeIcon className={cx('topic-icon')} icon={faChevronDown} />
                            </span>
                        </a>
                    </TopicNarbar>
                </li>
                <li className={cx('item', ['trending'])}>
                    <a>Thịnh hành</a>
                </li>
                {currentUser ? (
                    <>
                        <li className={cx('item', ['popular'])}>
                            <a>Phim ưa thích</a>
                        </li>
                    </>
                ) : (
                    <></>
                )}
                <li className={cx('item', ['search'])}>
                    <Search />
                </li>

                {menuMobile ? (
                    <li ref={buttonBars} onClick={handHeightleMenu} className={cx('item', ['bars'])}>
                        <FontAwesomeIcon className={cx('bars-icon')} icon={faBars} />
                    </li>
                ) : (
                    <></>
                )}
                {currentUser ? (
                    <>
                        <li className={cx('item', ['current-user'])}>
                            <a href="#">
                                <div className={cx('current-image')}>
                                    <ProfileMenu Profiles={MENU_PROFILE}>
                                        <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-1/157864744_118862420213315_3830171837531993159_n.jpg?stp=cp0_dst-jpg_p86x86&_nc_cat=111&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=T8ZAB3349ZYAX8FFFPq&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-FPHZJ28RRoZJrgF7OWbCPnOf3eAg3ceQJwbClFPX-XA&oe=62DEA947" />
                                    </ProfileMenu>

                                    <div className={cx('user-level')}>Basic</div>
                                </div>

                                <div className={cx('arrow-down')}></div>
                            </a>
                        </li>
                    </>
                ) : (
                    <>
                        <li className={cx('item', ['login'])}>
                            <span> Đăng nhập</span>
                        </li>
                        <li className={cx('item', ['experience'])}>
                        
                            {typeButton ? (
                                
                                <Button primary smailTablet href="#">
                                    trải nghiệm ngay
                                </Button>
                            ) : (
                                <Button primary medium href="#">
                                    trải nghiệm ngay
                                </Button>
                            )}
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}
Menu.prototype = {
    children:PropTypes.node.isRequired
}
export default Menu;
