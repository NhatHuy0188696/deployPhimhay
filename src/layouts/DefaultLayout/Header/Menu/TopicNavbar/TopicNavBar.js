import 'tippy.js/dist/tippy.css';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import Style from './TopicNarbar.module.scss';
import classNames from 'classnames/bind';

import MenuItem1 from './MenuItem1';
import MenuItem2 from './MenuItem2';
import MenuItem3 from './MenuItem3';
import Boxlevel from '~/components/boxLevel/boxLevel';
const cx = classNames.bind(Style);
function TopicNavbar({ children, items = [], items2 = [],items3=[] }) {
    const Menu1 = () => {
        return items.map((item, index) => <MenuItem1 key={index} menuList1={item} />);
    };
    const Menu2 = () => {
        return items2.map((item2, index)  =>
            <MenuItem2 key={index} menuList2={item2}/>
        );
    };
    const Menu3 =() =>{
        return items3.map((item3,index)=>
            <MenuItem3 key={index} menuList3={item3} />
        )
    }
    const renderModal = (attrs) => (
        <div className={cx('video-modal')} tabIndex="-1" {...attrs}>
            <div className={cx('topic-menu--header')}>
                <h4>khám phá theo chủ đề</h4>
                <div className={cx('line')}></div>
            </div>
            <div className={cx('topic-menu')}>
                <ul>{Menu1()}</ul>
                <ul>{Menu2()}</ul>
                <ul>{Menu3()}</ul>
            </div>
            <div className={cx('topic-menu--header')}>
                <h4>khám phá theo trình độ</h4>
                <div className={cx('line')}></div>
            </div>
            <div className={cx('level')}>
                <div className={cx('level-box')}>
                    <Boxlevel beginner>1</Boxlevel>
                </div>
                <div className={cx('level-box')}>
                <Boxlevel highBeginer>2</Boxlevel>
                </div>
                <div className={cx('level-box')}>
                <Boxlevel intermedite>3</Boxlevel>
                </div>
                <div className={cx('level-box')}>
                <Boxlevel highIntermedite>4</Boxlevel>
                </div>
            </div>
        </div>
    )
    return (
        <Tippy
            interactive
           
            placement="bottom"
            render={renderModal}
        >
            {children}
        </Tippy>
    );
}
TopicNavbar.prototype = {
    children:PropTypes.node.isRequired,
    items:PropTypes.object,
    items2:PropTypes.object,
    items3:PropTypes.object,
}
export default TopicNavbar;
