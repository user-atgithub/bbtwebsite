import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroVideo from "../Assets/videos/hero-video.mp4";
import icon01 from "../Assets/images/icon01.png";
import icon02 from "../Assets/images/icon02.png";
import icon03 from "../Assets/images/icon03.png";
import featureImg from "../Assets/images/feature-img.png";
import faqImg from "../Assets/images/faq-img.png";
import FaqList from '../components/Faq/FaqList';
import videoIcon from "../Assets/images/video-icon.png";
import avatarIcon from "../Assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from '../components/About/About';

const Home = () => {
    const navigate = useNavigate();
    const [typedText, setTypedText] = useState('');
    const [stage, setStage] = useState(1); // 1 for typing, 2 for backspacing, 3 for final typing
    const [videoEnded, setVideoEnded] = useState(false); // New state to check if video ended
    const [showButton, setShowButton] = useState(false); // State to trigger the slide-up animation
    const textToType = "Because they are not cars,";
    const finalText = "Because they are not just cars, they are emotions.";

    // This useEffect runs when the video ends
    const handleVideoEnd = () => {
        setVideoEnded(true); // Set videoEnded to true when video ends
    };

    useEffect(() => {
        // Only start typing effect if the video has ended
        if (!videoEnded) return;

        let typingDelay = 100;
        let backspacingDelay = 50;

        const typeEffect = () => {
            switch (stage) {
                case 1: // Typing initial text
                    if (typedText.length < textToType.length) {
                        setTypedText(textToType.slice(0, typedText.length + 1));
                    } else {
                        setTimeout(() => setStage(2), 500); // Pause before backspacing
                    }
                    break;
                case 2: // Backspacing "cars" letter by letter
                    if (typedText.endsWith("cars,")) {
                        setTypedText(typedText.slice(0, -1)); // Remove one character at a time
                    } else if (typedText.endsWith("not ")) {
                        setStage(3); // Move to the final typing stage
                    } else {
                        setTypedText(typedText.slice(0, -1));
                    }
                    break;
                case 3: // Typing final text
                    if (typedText.length < finalText.length) {
                        setTypedText(finalText.slice(0, typedText.length + 1));
                    } else {
                        setTimeout(() => setShowButton(true), 500); // Show button after typing effect ends
                    }
                    break;
                default:
                    break;
            }
        };

        const delay = stage === 2 ? backspacingDelay : typingDelay;
        const timer = setTimeout(typeEffect, delay);

        return () => clearTimeout(timer);
    }, [typedText, stage, videoEnded]);

    const handleClick = () => {
        navigate('/technicians');
    };

    return (
        <>
            {/*======hero section with video======*/}
            <section className="hero__section pt-[200px] relative overflow-hidden h-screen">
                {/* Background video */}
                <video
                    autoPlay
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    onEnded={handleVideoEnd} // Trigger typing effect when video ends
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Full-width container */}
                <div className="relative z-10 px-8">
                    <div className="flex flex-col items-center text-center gap-[30px]">
                        {/*======hero content======*/}
                        <div>
                            <h1 className="text-[28px] leading-[38px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] text-center max-w-[950px] mx-auto sm:text-[24px] sm:leading-[34px]">
                                <span>{typedText}</span>
                            </h1>
                            <p className="text__para text-center max-w-3xl mx-auto mt-4">
                            </p>

                            {/* Apply slide-up animation class based on `showButton` state */}
                            {showButton && (
                                <button
                                    className="btn mt-6 slide-up px-4 py-2 text-sm sm:text-base md:text-lg"
                                    onClick={handleClick}>
                                    Request an Appointment
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/*======hero section end======*/}

            {/*======hero stats section======*/}
            <section className="hero__stats mt-[50px]">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                {new Date().getFullYear() - 2012}+ 
                            </h2>
                            <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] mx-auto"></span>
                            <p className="text__para">Years of Experience</p>
                        </div>

                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                02+
                            </h2>
                            <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] mx-auto"></span>
                            <p className="text__para">Garage Locations</p>
                        </div>

                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                100%
                            </h2>
                            <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] mx-auto"></span>
                            <p className="text__para">Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*======hero stats section end======*/}

            <section>
                <div className="container">
                    <div className="lg:w-[700px] mx-auto">
                        <h2 className="heading text-center">
                            Providing the best services
                        </h2>
                        <p className="text__para text-center">
                            World-class service for everyone. We offer unmatched,
                            professional car modifications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                        <div className="py-[30px] px-5 ">
                            <div className="flex items-center justify-center">
                                <img src={icon01} alt="" />
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Find a Technician
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World-class service for everyone. We offer unmatched,
                                    professional car modifications.
                                </p>

                                <Link
                                    to="/technicians"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                                >
                                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5 ">
                            <div className="flex items-center justify-center">
                                <img src={icon02} alt="" />
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Find a Location
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World-class service for everyone. We offer unmatched,
                                    professional car modifications.
                                </p>

                                <Link
                                    to="/contact"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                                >
                                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                </Link>
                            </div>
                        </div><div className="py-[30px] px-5 ">
                            <div className="flex items-center justify-center">
                                <img src={icon03} alt="" />
                            </div>

                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                    Book Appointment
                                </h2>
                                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                    World-class service for everyone. We offer unmatched,
                                    professional car modifications.
                                </p>

                                <Link
                                    to="/technicians"
                                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                                >
                                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <About />

 {/*======feature section======*/}
<section>
    <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*======feature content======*/}
            <div className="xl:w-[670px]">
                <h2 className="heading">
                    Get virtual guidance <br /> anytime.
                </h2>
                <ul className="pl-4">
                    <li className="text__para text-justify">
                        1. Drop an email to our technician directly.
                    </li>
                    <li className="text__para text-justify">
                        2. Search for your technician here, and contact them directly.
                    </li>
                    <li className="text__para text-justify">
                        3. Schedule the appointment directly, use the online scheduling tool to select an appointment time.
                    </li>
                </ul>
                <Link to="/">
                    <button className="btn">Learn More</button>
                </Link>
            </div>

            {/*======feature img======*/}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} className="w-3/4" alt="" />

                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[6px] lg:gap-3">
                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                Tue, 24
                            </p>
                            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                                10:00AM
                            </p>
                        </div>
                        <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                            <img src={videoIcon} alt="" />
                        </span>
                    </div>

                    <div className="w-[65px] lg:w-[141px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                        Remote Consultation
                    </div>

                    <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                        <img src={avatarIcon} alt="" />
                        <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                            Bhuvnesh M.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*======feature section end======*/}

            {/*======faq section======*/}
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block">
                            <img src={faqImg} alt="" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="heading">
                                Frequently Asked Questions (FAQ)
                            </h2>

                            <FaqList />
                        </div>

                    </div>
                </div>
            </section>
            {/*======faq section end======*/}
           
        </>
    )
}

export default Home