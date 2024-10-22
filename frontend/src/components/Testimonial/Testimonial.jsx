import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import customerAvatar from '../../Assets/images/customer-avatar.png';

const testimonials = [
  {
    name: "Muhibur Rahman",
    rating: 4.5,
    text: "I have taken ambient lights service from them. They treat so well and they are providing the best car mod services.",
    date: "2024-10-20"
  },
  {
    name: "John Doe",
    rating: 4.5,
    text: "Great service but there is room for improvement.",
    date: "2024-10-19"
  },
  {
    name: "Jane Smith",
    rating: 5.0,
    text: "Excellent service! Exceeded my expectations.",
    date: "2024-10-18"
  },
  {
    name: "Alice Johnson",
    rating: 4.0,
    text: "Service was okay, but could use some improvements.",
    date: "2024-10-17"
  },  
  {
    name: "Muhibur Rahman",
    rating: 4.5,
    text: "I have taken ambient lights service from them. They treat so well and they are providing the best car mod services.",
    date: "2024-10-20"
  },
  {
    name: "John Doe",
    rating: 4.5,
    text: "Great service but there is room for improvement.",
    date: "2024-10-19"
  },
];

const MAX_LENGTH = 100; // Maximum length for the review before truncation

const Testimonial = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='mt-[30px] lg:mt-[55px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="border rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <img src={customerAvatar} alt='' className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                {testimonial.name}
              </h4>
              <span className="text-[16px] leading-[30px] text-headingColor">
                {new Date(testimonial.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex items-center mt-2">
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
          <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">
            {expandedIndex === index 
              ? testimonial.text 
              : testimonial.text.length > MAX_LENGTH 
                ? `${testimonial.text.substring(0, MAX_LENGTH)}...` 
                : testimonial.text
            }
            {testimonial.text.length > MAX_LENGTH && (
              <button 
                className="text-blue-500 cursor-pointer ml-2"
                onClick={() => handleToggleExpand(index)}
              >
                {expandedIndex === index ? " - " : " + "}
              </button>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
