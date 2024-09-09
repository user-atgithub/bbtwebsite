import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import TechnicianCard from "../../components/Technicians/TechnicianCard.jsx";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {Array.isArray(appointments) && appointments.length > 0 ? (
            appointments.map(technician => (
              <TechnicianCard technician={technician} key={technician._id} />
            ))
          ) : (
            <h2 className="mt-5 text-center text-primaryColor text-[20px] leading-7 font-semibold">
              You did not book any technician yet!
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
