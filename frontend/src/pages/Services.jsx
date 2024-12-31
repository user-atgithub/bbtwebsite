import { services } from "../Assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="xl:w-[900px] mx-auto">
                        <h2 className="heading text-center">Our Car Modification Services</h2>
                        <p className="text__para text-center">
                        Exceptional craftsmanship for your ride. Our services deliver unparalleled expertise in auto modifications.
                        </p>
                    </div>
                </div>
            </section>
            
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] justify-items-stretch">
                    {services.map((item, index) => (
                        <ServiceCard item={item} index={index} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;
