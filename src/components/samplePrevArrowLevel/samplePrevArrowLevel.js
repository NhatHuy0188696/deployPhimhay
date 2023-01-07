import classNames from 'classnames/bind';
import Style from './samplePrevArrowLevel.module.scss';
const cx = classNames.bind(Style)
function SamplePrevArrowLevel(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={cx('ArrowLevel-prev',[
            className
        ])}
        style={{ ...style,display: "block",zIndex:'1'}}
        onClick={onClick}
      />
    );
  }
  export default SamplePrevArrowLevel