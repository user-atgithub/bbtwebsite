import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";
import { BASE_URL, token } from "../../config.js";
import { toast } from "react-toastify";

const Profile = ({ technicianData }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        ticketPrice: 0,
        qualifications: [],
        experiences: [],
        timeSlots: [],
        about: "",
        photo: null,
    });
useEffect(() => {
    console.log('Technician Data:', technicianData); // Debugging line
    setFormData({
        name: technicianData?.name || '',
        email: technicianData?.email || '',
        phone: technicianData?.phone || '',
        bio: technicianData?.bio || '',
        gender: technicianData?.gender || '',
        specialization: technicianData?.specialization || '',
        ticketPrice: technicianData?.ticketPrice || 0,
        qualifications: technicianData?.qualifications || [],
        experiences: technicianData?.experiences || [],
        timeSlots: technicianData?.timeSlots || [],
        about: technicianData?.about || '',
        photo: technicianData?.photo || null,
    });
}, [technicianData]);


    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
        const data = await uploadImageToCloudinary(file);
        setFormData((prevFormData) => ({
            ...prevFormData,
            photo: data?.url
        }));
    };

    const updateProfileHandler = async (e) => {
        e.preventDefault();
        try {
            if (!technicianData?._id) {
                toast.error("Technician ID is missing.");
                return;
            }

            const res = await fetch(`${BASE_URL}/technicians/${technicianData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.message);

            toast.success(result.message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const addQualification = (e) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            qualifications: [
                ...prevFormData.qualifications,
                {
                    startingDate: '',
                    endingDate: '',
                    degree: '',
                    university: ''
                }
            ]
        }));
    };

    const deleteQualification = (e, index) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            qualifications: prevFormData.qualifications.filter((_, i) => i !== index)
        }));
    };

    const addExperience = (e) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            experiences: [
                ...prevFormData.experiences,
                {
                    startingDate: '',
                    endingDate: '',
                    position: '',
                    garage: ''
                }
            ]
        }));
    };

    const deleteExperience = (e, index) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            experiences: prevFormData.experiences.filter((_, i) => i !== index)
        }));
    };

    const addTimeSlot = (e) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            timeSlots: [
                ...prevFormData.timeSlots,
                {
                    day: '',
                    startingTime: '',
                    endingTime: ''
                }
            ]
        }));
    };

    const deleteTimeSlot = (e, index) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            timeSlots: prevFormData.timeSlots.filter((_, i) => i !== index)
        }));
    };

    const handleReusableInputChangeFunc = (key, index, event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            const updateItems = [...prevFormData[key]];
            updateItems[index] = { ...updateItems[index], [name]: value };
            return {
                ...prevFormData,
                [key]: updateItems
            };
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <div>
            <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
                Profile Information
            </h2>
            <form onSubmit={updateProfileHandler}>
                <div className="mb-5">
                    <p className="form_label">Name*</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="box_style"
                        autoComplete="name"
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Email*</p>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="box_style"
                        readOnly
                        disabled
                        autoComplete="email"
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Phone*</p>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="box_style"
                        autoComplete="tel"
                    />
                </div>
                <div className="mb-5">
                    <p className="form_label">Bio*</p>
                    <input
                        type="text"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Bio"
                        className="box_style"
                        maxLength={100}
                        autoComplete="bio"
                    />
                </div>
                <div className="mb-5">
                    <div className="grid grid-cols-3 gap-5 mb-[30px]">
                        <div>
                            <p className="form_label">Gender*</p>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="box_style"
                                autoComplete="gender"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <p className="form_label">Specialization*</p>
                            <select
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleInputChange}
                                className="box_style"
                                autoComplete="specialization"
                            >
                                <option value="">Select</option>
                                <option value="Intern">Intern</option>
                                <option value="Technician">Technician</option>
                                <option value="Senior Technician">Senior Technician</option>
                            </select>
                        </div>
                        <div>
                            <p className="form_label">Ticket Price*</p>
                            <input
                                type="number"
                                placeholder="100"
                                name="ticketPrice"
                                value={formData.ticketPrice}
                                className="box_style"
                                onChange={handleInputChange}
                                autoComplete="ticketPrice"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="form_label">Qualifications*</p>
                    {formData.qualifications?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5 mt-5">
                                    <div>
                                        <p className="form_label">Starting Date*</p>
                                        <input
                                            type="date"
                                            name="startingDate"
                                            value={item.startingDate}
                                            className="box_style"
                                            onChange={e => handleReusableInputChangeFunc('qualifications', index, e)}
                                            autoComplete="startingDate"
                                        />
                                    </div>
                                    <div>
                                        <p className="form_label">Ending Date*</p>
                                        <input
                                            type="date"
                                            name="endingDate"
                                            value={item.endingDate}
                                            className="box_style"
                                            onChange={e => handleReusableInputChangeFunc('qualifications', index, e)}
                                            autoComplete="endingDate"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form_label">Degree*</p>
                                    <input
                                        type="text"
                                        name="degree"
                                        value={item.degree}
                                        placeholder="Degree"
                                        className="box_style"
                                        onChange={e => handleReusableInputChangeFunc('qualifications', index, e)}
                                        autoComplete="degree"
                                    />
                                </div>
                                <div>
                                    <p className="form_label">University*</p>
                                    <input
                                        type="text"
                                        name="university"
                                        value={item.university}
                                        placeholder="University"
                                        className="box_style"
                                        onChange={e => handleReusableInputChangeFunc('qualifications', index, e)}
                                        autoComplete="university"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-4">
                                <button
                                    className="py-2 px-4 text-white bg-red-600 rounded-md"
                                    onClick={e => deleteQualification(e, index)}
                                >
                                    <AiOutlineDelete className="text-xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-5">
                        <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                            Add Qualification
                        </button>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="form_label">Experiences*</p>
                    {formData.experiences?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <div className="grid grid-cols-2 gap-5 mt-5">
                                    <div>
                                        <p className="form_label">Starting Date*</p>
                                        <input
                                            type="date"
                                            name="startingDate"
                                            value={item.startingDate}
                                            className="box_style"
                                            onChange={e => handleReusableInputChangeFunc('experiences', index, e)}
                                            autoComplete="startingDate"
                                        />
                                    </div>
                                    <div>
                                        <p className="form_label">Ending Date*</p>
                                        <input
                                            type="date"
                                            name="endingDate"
                                            value={item.endingDate}
                                            className="box_style"
                                            onChange={e => handleReusableInputChangeFunc('experiences', index, e)}
                                            autoComplete="endingDate"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form_label">Position*</p>
                                    <input
                                        type="text"
                                        name="position"
                                        value={item.position}
                                        placeholder="Position"
                                        className="box_style"
                                        onChange={e => handleReusableInputChangeFunc('experiences', index, e)}
                                        autoComplete="position"
                                    />
                                </div>
                                <div>
                                    <p className="form_label">Garage*</p>
                                    <input
                                        type="text"
                                        name="garage"
                                        value={item.garage}
                                        placeholder="Garage"
                                        className="box_style"
                                        onChange={e => handleReusableInputChangeFunc('experiences', index, e)}
                                        autoComplete="garage"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-4">
                                <button
                                    className="py-2 px-4 text-white bg-red-600 rounded-md"
                                    onClick={e => deleteExperience(e, index)}
                                >
                                    <AiOutlineDelete className="text-xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-5">
                        <button onClick={addExperience} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                            Add Experience
                        </button>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="form_label">Time Slots*</p>
                    {formData.timeSlots?.map((item, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-3 gap-5 mt-5">
                                <div>
                                    <p className="form_label">Day*</p>
                                    <select
                                        name="day"
                                        value={item.day}
                                        onChange={e => handleReusableInputChangeFunc('timeSlots', index, e)}
                                        className="box_style py-3.5"
                                        autoComplete="day"
                                    >
                                        <option value="">Select</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="form_label">Starting Time*</p>
                                    <input
                                        type="time"
                                        name="startingTime"
                                        value={item.startingTime}
                                        className="box_style"
                                        onChange={e => handleReusableInputChangeFunc('timeSlots', index, e)}
                                        autoComplete="startingTime"
                                    />
                                </div>
                                <div>
                                    <p className="form_label">Ending Time*</p>
                                    <input
                                        type="time"
                                        name="endingTime"
                                        value={item.endingTime}
                                        className="box_style"
                                        onChange={e => handleReusableInputChangeFunc('timeSlots', index, e)}
                                        autoComplete="endingTime"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-4">
                                <button
                                    className="py-2 px-4 text-white bg-red-600 rounded-md"
                                    onClick={e => deleteTimeSlot(e, index)}
                                >
                                    <AiOutlineDelete className="text-xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-5">
                        <button onClick={addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                            Add TimeSlot
                        </button>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="form_label">About*</p>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleInputChange}
                        placeholder="Write about yourself..."
                        className="box_style"
                        maxLength={150}
                        autoComplete="about"
                    />
                </div>
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

                <div className="mt-5">
                    <button
                        type="submit"
                        className="w-full py-4 text-white bg-primaryColor rounded-[8px]"
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
