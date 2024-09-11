import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import StarRatings from 'react-star-ratings';
import customerAvatar from '../../Assets/images/customer-avatar.png';

const testimonials = [
  {
    name: "Muhibur Rahman",
    rating: 4.5,
    text: "I have taken ambient lights service from them. They treat so well and they are providing the best car mod services."
  },
  {
    name: "John Doe",
    rating: 3.5,
    text: "Great service but there is room for improvement."
  },
  {
    name: "Jane Smith",
    rating: 5.0,
    text: "Excellent service! Exceeded my expectations."
  },
  {
    name: "Alice Johnson",
    rating: 2.0,
    text: "Service was okay, but could use some improvements."
  },
];

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={customerAvatar} alt='' />
              </div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                {testimonial.name}
              </h4>
              <div className="flex items-center gap-[2px]">
                <StarRatings
                  rating={testimonial.rating}
                  starRatedColor="orange"
                  starDimension="24px"
                  starSpacing="2px"
                  numberOfStars={5}
                  name='rating'
                  svgIconPath="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  svgIconViewBox="0 0 24 24"
                />
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                "{testimonial.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
