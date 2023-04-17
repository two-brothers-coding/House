
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import './slider.scss'

import {content} from './content';
function Slider() {
    
  return (
    <div>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            content.map((item,index)=>{
                return (
                <SwiperSlide key={index}>
                    <div className="card">
                        <img src={item.img} alt="house"/>
                        <div className="cardprop">
                        <h3>{item.title}</h3>
                            <h4>{item.price}</h4>
                        </div>
                        <img src={item.img2} alt="seller1" />
                    </div>
                </SwiperSlide>
                )
            })
        }
      
       
      </Swiper>
    </div>
  )
}

export default Slider
{/* <SwiperSlide>
<div className="card">
    <img src={house2} alt="house"/>
    <div className="cardprop">
        <h3>Woodlandside</h3>
        <h4>$ 25.000.000</h4>
    </div>
    <img src={seller2} alt="seller1" />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="card">
    <img src={house3} alt="house"/>
    <div className="cardprop">
        <h3>The Old Lighthouse</h3>
        <h4>$ 325.000.000</h4>
    </div>
    <img src={seller3} alt="seller1" />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="card">
    <img src={house1} alt="house"/>
    <div className="cardprop">
        <h3>Roselands House</h3>
        <h4>$ 35.000.000</h4>
    </div>
    <img src={seller1} alt="seller1" />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="card">
    <img src={house3} alt="house"/>
    <div className="cardprop">
        <h3>The Old Lighthouse</h3>
        <h4>$ 325.000.000</h4>
    </div>
    <img src={seller3} alt="seller1" />
</div>
</SwiperSlide> */}