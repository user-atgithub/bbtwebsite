import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
import '../../App.css'; // Import the CSS file for the keyframe animations

const ProductCard = ({ item, index }) => {
    const { name, description, price, image } = item;

    return (
        <div className="service-card relative p-6 bg-white shadow-lg rounded-lg flex flex-col h-[300px]">
            <div className="flex flex-col flex-grow mb-14">
                <h2 className="text-xl font-bold text-headingColor mb-4">
                    {name}
                </h2>
                <p className="text-base text-textColor">
                    {description}
                </p>
                <p className="text-base text-textColor">
                    ${price}
                </p>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <Link
                    to="/technicians"
                    className="w-12 h-12 rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                    <BsArrowRight className="group-hover:text-white w-5 h-5" />
                </Link>
                <span className="w-12 h-12 flex items-center justify-center text-lg font-semibold"
                    style={{
                        background: '#f0f0f0',
                        color: '#000',
                        borderRadius: "6px 0 0 6px"
                    }}
                >
                    {index + 1}
                </span>
            </div>
        </div>
    );
};

export default ProductCard;
