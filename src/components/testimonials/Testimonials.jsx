import React from "react";
import "./testimonials.css";
import AVATR1 from "../../assets/avatar1.jpg";
import AVATR2 from "../../assets/avatar2.jpg";
import AVATR3 from "../../assets/avatar3.jpg";
import AVATR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATR1,
    name: "Aster Awoke",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minus! Recusandae ea necessitatibus tempora officia provident sunt est dolorem esse neque temporibus. Doloribus odit dignissimos quae rem nulla nostrum possimus",
  },
  {
    avatar: AVATR2,
    name: "Tilahun Gessese",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minus! Recusandae ea necessitatibus tempora officia provident sunt est dolorem esse neque temporibus. Doloribus odit dignissimos quae rem nulla nostrum possimus",
  },
  {
    avatar: AVATR3,
    name: "Teddy Afro",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minus! Recusandae ea necessitatibus tempora officia provident sunt est dolorem esse neque temporibus. Doloribus odit dignissimos quae rem nulla nostrum possimus",
  },
  {
    avatar: AVATR4,
    name: "Neway Debebe",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minus! Recusandae ea necessitatibus tempora officia provident sunt est dolorem esse neque temporibus. Doloribus odit dignissimos quae rem nulla nostrum possimus",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar Image" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
