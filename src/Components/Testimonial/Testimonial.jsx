import { Swiper, SwiperSlide } from "swiper/react";
import "./Tesimonial.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
// import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonial = () => {
  const client = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Client Always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <div className="t-slider">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          //   onAutoplayStart={true}
          //   onDurationChange={1}
        >
          {client.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={item.img} alt="" />
                <span>{item.review}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <SwiperSlide key={index}>
          <div className="testimonial">
            <img src={item.img} alt="" />
            <span>{item.review}</span>
          </div>
        </SwiperSlide> */}
      </div>
    </div>
  );
};

export default Testimonial;
