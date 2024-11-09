import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import HashLoader from 'react-spinners/HashLoader';
import { toast } from "react-toastify";

const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const token = localStorage.getItem('token');

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error('Rating & Review Fields are required');
      }

      const res = await fetch(`${BASE_URL}/technicians/${id}/reviews`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);
      
      // Trigger thank-you message display in Feedback component
      onFeedbackSubmit();
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?<span className="text-red-500">*</span>
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= (rating || hover) ? "text-yellowColor" : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions<span className="text-red-500">*</span>
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline-none focus:outline-primaryColor w-full px-3 py-3 rounded-md"
          rows="5"
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn">
        {loading ? <HashLoader size={25} color="#fff"/> : 'Submit Feedback'}
      </button>
    </form>
  );
};

export default FeedbackForm;
