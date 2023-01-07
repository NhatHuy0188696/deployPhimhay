import classNames from 'classnames/bind';
import Style from './feedback.module.scss';
import { useState, useEffect } from 'react';
import * as apiFeedback from '~/Api/apiFeedback';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const cx = classNames.bind(Style);
function FeedbackItem() {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await apiFeedback.APIFeedback();
            setFeedbacks(data);
        };
        fetchApi();
    }, []);

    return (
        <>
            <Slider 
            className={cx('slick-feedback')}
            arrows={false} 
            dots={true}
           
           
            
            >
                {feedbacks.map((feedback, index) => (
                    <div key={feedback.id}>
                        <div className={cx('feedback-item')}>
                            <img className={cx('thumbnail')} src={feedback.thumbnail}></img>
                            <div className={cx('feedback-message')}>
                                <p>{feedback.message}</p>
                                <p>
                                    {feedback.use} - {feedback.job}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default FeedbackItem;
