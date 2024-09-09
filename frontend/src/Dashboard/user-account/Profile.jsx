import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";
import { BASE_URL, token } from "../../config.js";
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Profile = ({ user }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        photo: null,
        gender: "",
        carName: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                photo: user.photo || null,
                gender: user.gender || "",
                carName: user.carName || ""
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const data = await uploadImageToCloudinary(file);
                setSelectedFile(data.url);
                setFormData(prevState => ({
                    ...prevState,
                    photo: data.url
                }));
            } catch (error) {
                console.error('Error uploading image:', error);
                toast.error('Error uploading image');
            }
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/users/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Something went wrong');
            }

            const { message } = await res.json();
            toast.success(message);
            navigate('/users/profile/me');
        } catch (err) {
            console.error('Update failed:', err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-10">
            <form onSubmit={submitHandler}>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                        required
                        autoComplete="name"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="email"
                        placeholder="Enter Your email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                        autoComplete="new-password"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Car Name"
                        name="carName"
                        value={formData.carName}
                        onChange={handleInputChange}
                        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                        required
                        autoComplete="car-name"
                    />
                </div>
                <div className="mb-5 flex items-center justify-between">
                    <label className="text-headingColor font-bold text-[16px] leading-7">
                        Gender:
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                            autoComplete="gender"
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                <div className="mb-5 flex items-center gap-3">
                    {formData.photo && (
                        <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                            <img src={formData.photo} alt="Profile" className="w-full rounded-full" />
                        </figure>
                    )}
                    <div className="relative w-[130px] h-[50px]">
                        <input
                            type="file"
                            name="photo"
                            id="customFile"
                            onChange={handleFileInputChange}
                            accept=".jpg, .png"
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <label
                            htmlFor="customFile"
                            className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                        >
                            Upload Photo
                        </label>
                    </div>
                </div>
                <div className="mt-7">
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-2"
                    >
                        {loading ? <HashLoader size={25} color="#ffffff" /> : 'Update'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
