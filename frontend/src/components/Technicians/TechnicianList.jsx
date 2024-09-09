import TechnicianCard from './TechnicianCard.jsx';
import { BASE_URL } from "./../../config.js";
import useFetchData from "./../../hooks/useFetchData.jsx";
import Loader from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const TechnicianList = () => {
  const { data: technicians, loading, error } = useFetchData(`${BASE_URL}/technicians`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && technicians && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {technicians.map(technician => (
            <TechnicianCard key={technician._id} technician={technician} />
          ))}
        </div>
      )}
    </>
  );
};

export default TechnicianList;
