import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./Swiper.css";
import Image1 from "./about/test1.png";
import Image2 from "./about/test2.png";
import Image3 from "./about/test3.png";
import Image4 from "./about/test4.png";

const testimonials = [
  {
    name: "Emma Brown",
    feedback: "Lex Holidays made our honeymoon truly special. The attention to detail was incredible!",
    image: Image1,  
  },
  {
    name: "John Smith",
    feedback: "I've never experienced such seamless travel arrangements. Everything was top-notch!",
    image: Image2,
  },
  {
    name: "Jane Doe",
    feedback: "The best travel experience I've ever had! Everything was perfectly arranged.",
    image: Image3,
  },
  {
    name: "Michael Lee",
    feedback: "Highly recommended! Hassle-free and well-organized travel plans.",
    image: Image4,
  },
];

export default function TestimonialSwiper() {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Customer Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={2} // Show two testimonials at a time
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          480: { slidesPerView: 1 }, // Mobile view: show one at a time
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
