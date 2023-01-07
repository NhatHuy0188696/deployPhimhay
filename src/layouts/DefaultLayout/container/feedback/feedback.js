import classNames from "classnames/bind";
import Style from './feedback.module.scss'
import FeedbackItem from "./feedbackItem";
const cx =  classNames.bind(Style)
function Feedback() {

    return <div className={cx('wrapper')}>
        <div className={cx('feedback-title')}>
            <h3>Cộng đồng nói gì về phương pháp học tiếng anh qua Phim Learning?</h3>
            
        </div>
        <div className={cx('feedback-content')}>
        <FeedbackItem/>
           
        </div>
    </div>;
}

export default Feedback;