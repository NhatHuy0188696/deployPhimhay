import classNames from 'classnames/bind';
import Style from './container.module.scss';
import BannerContainer from './bannerContainer';
import Introduce from './introduce';
import ContainerFilms from './containerFilms/containerFilms';
import Feedback from './feedback';
import Expensive from './expensive/expensive';
import { bannerSlick } from '~/assets/images';
const cx = classNames.bind(Style);


 const dataSliders =[
   {
       name:'The Big Sick',
       thumbnail:bannerSlick.banner7,
       titlie:'The Big Sick là bộ phim hài lãng mạn được đạo diễn bởi Micheal Showalter (Hello My Name is Doris). Phim dựa trên câu chuyện cuộc đời của diễn viên chính kiêm biên kịch Kumail Nanjiani và người hiện là vợ anh Emily Gordon. Gia đình Hồi giáo gốc Pakistan của Kumail không hài lòng về mối quan hệ giữa anh và Emily, vốn là một người Mỹ. -- Tình cảnh của 2 người trở nên éo le hơn bao giờ hết khi Emily bị hành hạ bởi một căn bệnh bí hiểm trong khi Kumail lãnh trách nhiệm "đối đầu" với phụ huynh của cô. The Big Sick là một trong những bộ phim được đánh giá cao nhất về cả mặt nghệ thuật lẫn thương mại tại Liên hoan phim Sundance năm nay. --',
       IMBD:7.7,
      
       GenreMovie:[
           {
               genre:'Comedy',
               to:'',
           },
           {
               genre:'Drama',
               to:'',
           },
           {
               genre:'Romance',
               to:'',
           }
       ]
   },
   {
       name:'Memoirs Of A Geisha',
       thumbnail:bannerSlick.banner3,
       titlie:'Phim nói về cuộc sống của một kỹ nữ Chiyo với nghệ danh Sayuri. Với gương mặt xinh đẹp cô đã hốt hồn rất nhiều khách làng chơi nhưng với thân phận là một kỹ nữ cô lại đem lòng yêu một vị đại g…',
       IMBD:7.4,
      
       GenreMovie:[
           {
               genre:'Draman',
               to:'',

           },
           {
               genre:'History',
               to:'',
           },
           {
               genre:'Romance',
               to:'',
           }
       ]
   },
   {
       name:"She's Out Of My League",
       thumbnail:bannerSlick.banner4,
       titlie:'Kirk Kettner là nhân viên an ninh tại sân bay Pittsburgh. Thời gian rảnh rỗi anh thường dành cho những người bạn từ thời trung học, đồng thời là …',
       IMBD:6.4,
      
       GenreMovie:[
          
           {
               genre:'Comendy',
               to:'',
           },
           {
               genre:'Romance',
               to:'',
           }
       ]
   },
   {
       name:"When In Rome",
       thumbnail:bannerSlick.banner1,
       titlie:'Beth là một người phụ nữ của công việc, khó mà có một mối quan hệ bền vững vì cô luôn đặt công việc lên trên người yêu. Khi Beth đ…',
       IMBD:5.6,
      
       GenreMovie:[
          
           {
               genre:'Comendy',
               to:'',
           },
           {
               genre:'Fantasy',
               to:'',
           },
           {
               genre:'Romance',
               to:'',
           },
       ]
   },
   {
       name:"Just Go With It",
       thumbnail:bannerSlick.banner5,
       titlie:'Danny là bác sĩ phẫu thuật thẩm mỹ mang chiếc nhẫn cưới giả như là một “chiêu” để lấy lòng các cô gái trẻ đẹp. Khi gặp cô gái bốc…',
       IMBD:6.4,
      
       GenreMovie:[
          
           {
               genre:'Comendy',
               to:'',
           },
           {
               genre:'Romance',
               to:'',
           },
       ]
   },
   {
       name:"The Layover",
       thumbnail:bannerSlick.banner6,
       titlie:'Phim Chuyến Đi Bất Ngờ - The Layover 2017 kể về câu chuyện hai mỹ nữ trong chuyến du lịch đi Florida. Họ phải đối mặt với nhiều tình huống trớ trêu trên chặng đường dài vì bị đổi hư…',
       IMBD:4.7,
      
       GenreMovie:[
          
           {
               genre:'Comendy',
               to:'',
           },
           {
               genre:'Romance',
               to:'',
           },
       ]
   },
   {
       name:"Edward Scissorhands",
       thumbnail:bannerSlick.banner2,
       titlie:'Edward Scissorhands là bộ phim lãng mạn, giả tưởng của Mỹ năm 1990 do Tim Burton đạo diễn và có sự tham gia diễn xuất của Johnny Depp. Phim xoay quanh một người máy chưa hoàn thiện tên Edward, với bàn tay là những chiếc kéo. Anh đã được đưa tới sống ở vùng ngoại ô cùng gia đình n…',
       IMBD:7.9,
      
       GenreMovie:[
          
           {
               genre:'Fantasy',
               to:'',
           },
           {
               genre:'Drama',
               to:'',
           },
           {
               genre:'Romance',
               to:'',
           },
       ]
   }
]
function Container() {
    return (
        <div className={'wrapper'}>
            <BannerContainer dataslick={dataSliders}/>
            <div className={cx('content')}>
                <Introduce  />
                <ContainerFilms />
                <Feedback />
                <Expensive/>
            </div>
        </div>
    );
   
  
}

export default Container;
