import { useState } from "react";
import avatar from "../../Assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import { FaUser } from "react-icons/fa"; // Import user icon for fallback
import FeedbackForm from "./FeedbackForm";

const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

  // Calculate total pages based on the number of reviews
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Get current reviews for the page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating}) {/* Total rating is shown in brackets */}
        </h4>
        {currentReviews.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                {review?.user?.photo ? (
                  <img 
                    className="w-full h-full rounded-full object-cover" 
                    src={review.user.photo} 
                    alt="User" 
                  />
                ) : (
                  <FaUser className="w-6 h-6 text-black" />
                )}
              </figure>
              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {review?.user?.name}
                </h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text_para mt-3 font-medium text-[15px]">
                  {review.reviewText}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
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

      {!showFeedbackForm && (
        <div className="text-center mt-6">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
