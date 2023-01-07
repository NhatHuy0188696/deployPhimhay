import classNames from 'classnames/bind';
import Styles from './playRing.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(Styles)
function PlayRing() {
  
   return <div className={cx('wrapper')}>
   <div className={cx('play-movie')}>
       <img src={images.play}></img>
   </div>
</div>
}

export default PlayRing;