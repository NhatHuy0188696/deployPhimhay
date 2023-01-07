import classNames from 'classnames/bind';
import Style from './sampleNextArrowLevel.module.scss';
const cx = classNames.bind(Style)
function SampleNextArrowLevel(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={cx('ArrowLevel-next',[
            className
        ])}
        style={{ ...style,display: "block",zIndex:'1'}}
        onClick={onClick}
      />
    );
  }
  export default SampleNextArrowLevel