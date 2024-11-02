import { useState, useEffect } from 'react';
import TechnicianCard from './../../components/Technicians/TechnicianCard';
import { BASE_URL } from "./../../config.js";
import useFetchData from "./../../hooks/useFetchData.jsx";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const Technicians = () => {
    const [query, setQuery] = useState('');
    const [debounceQuery, setDebounceQuery] = useState('');

    // Set the debounce query after a delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceQuery(query.trim());
        }, 700);

        return () => clearTimeout(timeout);
    }, [query]);

    // Fetch technicians with debounceQuery
    const { data, loading, error } = useFetchData(`${BASE_URL}/technicians?query=${debounceQuery}`);
    const technicians = Array.isArray(data) ? data : []; // Ensure technicians is always an array

    return (
        <>
            <section className="bg-[#fff9ea]">
                <div className="container text-center">
                    <h2 className="heading">Find a Technician</h2>
                    <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
                        <input
                            type="search"
                            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
                            placeholder="Search technician by name or specification"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={() => setQuery(query.trim())}>
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    {loading && <Loader />}
                    {error && <Error />}
                    {!loading && !error && (
                        <>
                            {technicians.length === 0 ? (
                                <p className="text-center text-red-500">Sorry, no results found.</p>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                    {technicians.map((technician, index) => (
                                        <TechnicianCard key={technician.id || index} technician={technician} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Technicians;
