
import classNames from 'classnames/bind';
import Style from './introduce.module.scss';
import ListItem from './listItem';
import { InforImage } from '~/assets/images';
const cx = classNames.bind(Style);

const titleContext = [
    {
        image:InforImage.image1,
        title:'Luyện nói tiếng Anh thông minh',
        description:'Thực hành luyện nói tiếng anh mỗi ngày thông qua phụ đề thông ngữ thông minh. Giúp trau dồi được khả năng phát âm tiếng anh qua việc xem phim có engsub, ngữ điệu cùng phản xạ nói cực kỳ nhanh chóng.',

    },
    {
        image:InforImage.image2,
        title:'Chế độ luyện nghe hiệu quả',
        description:'Cung cấp chế độ luyện nghe tiếng anh qua phim riêng biệt cho người học, nâng cao khả năng nghe cực kỳ hiệu quả mà chưa có phương pháp luyện nghe tiếng anh nào làm được.',
        
    },
    {
        image:InforImage.image3,
        title:'Nâng cao vốn từ vựng tiếng Anh',
        description:'Gia tăng vốn từ tiếng anh của bạn với vô số từ mới dùng trong giao tiếp thông qua việc xem phim phụ đề tiếng anh. Phụ đề tiếng anh song ngữ Anh-Việt giúp việc học và ghi chép từ vựng tiếng anh chưa bao giờ dễ dàng hơn.',
        
    },
]


function Introduce() {
    return <div className={cx('text-infor')}>
            <ListItem listInfor={titleContext}/>
           
    </div>
}

export default Introduce;