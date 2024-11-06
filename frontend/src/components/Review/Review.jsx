import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import customerAvatar from '../../Assets/images/customer-avatar.png';
import reviews from '../../Assets/data/reviews';
import '../../App.css'; // Import the CSS file for the keyframe animations

const MAX_LENGTH = 100;

const Review = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(21);
  const [filterRating, setFilterRating] = useState(0);
  const [sortOrder, setSortOrder] = useState('');

  const handleToggleExpand = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleChangeReviewsPerPage = (e) => {
    setReviewsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterRating(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredReviews = reviews
    .filter(review => filterRating === 0 || review.rating === filterRating)
    .sort((a, b) => {
      if (sortOrder === 'low-to-high') return a.rating - b.rating;
      if (sortOrder === 'high-to-low') return b.rating - a.rating;
      return 0;
    });

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      {/* Header section */}
      <div className="container">
        <div className="xl:w-[700px] mx-auto text-center mb-8">
          <h2 className="heading">What our customer say</h2>
          <p className="text__para">
            World-class care for everyone. Our services offer unmatched expert auto mods.
          </p>
        </div>
      </div>

      {/* Controls for pagination, filter, and sorting */}
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="reviewsPerPage" className="mr-2">Show reviews per page:</label>
          <select id="reviewsPerPage" value={reviewsPerPage} onChange={handleChangeReviewsPerPage}>
            <option value={6}>6</option>
            <option value={11}>11</option>
            <option value={21}>21</option>
          </select>
        </div>

        <div>
          <label htmlFor="filterRating" className="mr-2">Filter by rating:</label>
          <select id="filterRating" value={filterRating} onChange={handleFilterChange}>
            <option value={0}>All</option>
            {[5, 4, 3, 2, 1].map(rating => (
              <option key={rating} value={rating}>{rating} Stars</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sortOrder" className="mr-2">Sort by:</label>
          <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
            <option value="">Default</option>
            <option value="high-to-low">High to Low</option>
            <option value="low-to-high">Low to High</option>
          </select>
        </div>
      </div>

      {/* Reviews display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentReviews.map((review, index) => (
          <div key={index} className="review-card border rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
            <div className="flex items-center gap-3">
              <img src={customerAvatar} alt="" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  {review.name}
                </h4>
                <span className="text-[16px] leading-[30px] text-headingColor">
                  {new Date(`${review.date}T00:00:00`).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <StarRatings
                rating={review.rating}
                starRatedColor="orange"
                starDimension="24px"
                starSpacing="2px"
                numberOfStars={5}
                name="rating"
                svgIconPath="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                svgIconViewBox="0 0 24 24"
              />
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">
              {expandedIndex === index 
                ? review.text.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  )) 
                : review.text.length > MAX_LENGTH 
                  ? `${review.text.substring(0, MAX_LENGTH)}...` 
                  : review.text.split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))
              }
              {review.text.length > MAX_LENGTH && (
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

      {/* Pagination controls */}
      <div className="flex justify-center mt-6">
        <button 
          className="px-4 py-2 mx-1 border rounded-md" 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
        <button 
          className="px-4 py-2 mx-1 border rounded-md" 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Review;
