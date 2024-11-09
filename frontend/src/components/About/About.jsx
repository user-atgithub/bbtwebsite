import React from 'react'
import aboutImg from "../../Assets/images/about.png"
import { Link } from 'react-router-dom';
import aboutCardImg from "../../Assets/images/about-card.png"

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col 
                lg:flex-row">
                    {/*======about img======*/}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    {/*======about content======*/}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading"> Proud to be one of the nations best</h2>
                        <p className="text__para text-justify">
                        For 15 years in a row, we've proudly held a spot as one of the nation’s top-rated providers. This recognition is a testament to our dedication, and we're grateful to our customers who have trusted us along the way.
                        </p>

                        <p className="text__para text-justify mt-[30px]">
                           Each day, we strive to raise the bar, focusing on the future and how we can continue to improve. Our commitment to exceptional service means we’re always looking ahead, finding new ways to care for and support you better.
                        </p>
                        <Link to='/'>
                            <button className="btn">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About