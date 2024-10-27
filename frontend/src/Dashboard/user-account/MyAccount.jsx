import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { authContext } from "../../Assets/context/authContext.jsx";
import MyBookings from "./MyBookings.jsx";
import Profile from "./Profile.jsx";
import useGetProfile from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config.js";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";

const MyAccount = () => {
    const { dispatch } = useContext(authContext);
    const [tab, setTab] = useState('bookings');
    const navigate = useNavigate();

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const handleDeleteAccount = async () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            try {
                const response = await fetch(`${BASE_URL}/users/${userData._id}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming JWT is stored in localStorage
                    },
                });

                const result = await response.json();
                if (result.success) {
                    alert("Account deleted successfully.");
                    dispatch({ type: "LOGOUT" }); // Log out the user after deletion
                    navigate("/"); // Redirect to home page or login after deletion
                } else {
                    alert("Failed to delete account: " + result.message);
                }
            } catch (err) {
                console.error("Error deleting account:", err);
                alert("An error occurred while trying to delete the account.");
            }
        }
    };

    if (loading) return <Loading />;
    if (error) return <Error errMessage={error} />;
    if (!userData) return <Error errMessage="User data not found" />;

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="pb-[50px] px-[30px] rounded-md">
                        <div className="flex items-center justify-center">
                            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                                <img
                                    src={userData.photo}
                                    alt=""
                                    className="w-full h-full rounded-full"
                                />
                            </figure>
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                                {userData.name || 'Name not available'}
                            </h3>
                            <p className="text-textColor text-[15px] leading-6 font-medium">
                                {userData.email || 'Email not available'}
                            </p>
                            <p className="text-textColor text-[15px] leading-6 font-medium">
                                Car Name:
                                <span className="ml-2 text-headingColor text-[15px] leading-6">
                                    {userData.carName || 'Car name not available'}
                                </span>
                            </p>
                        </div>
                        <div className="mt-[50px] md:mt-[100px]">
                            <button
                                onClick={handleLogout}
                                className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                            >
                                Logout
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
                            >
                                Delete account
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:px-[30px]">
                        <div>
                            <button
                                onClick={() => setTab("bookings")}
                                className={`${tab === "bookings"
                                    ? "bg-primaryColor text-white font-normal"
                                    : ""
                                    } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                            >
                                My Bookings
                            </button>
                            <button
                                onClick={() => setTab("settings")}
                                className={`${tab === "settings"
                                    ? "bg-primaryColor text-white font-normal"
                                    : ""
                                    } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                            >
                                Profile Settings
                            </button>
                        </div>
                        {tab === "bookings" && <MyBookings />}
                        {tab === "settings" && <Profile user={userData} />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAccount;
