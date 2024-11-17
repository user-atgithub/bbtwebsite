import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { contactQuestions } from "../Assets/data/contactQuestions.js";
import Loader from "../components/Loader/Loading.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [messageStatus, setMessageStatus] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mapLoading, setMapLoading] = useState(true); // State to track if map is loading

  const formRef = useRef(null);
  const mapRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ["name", "email", "contactNumber", "message"];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    });

    return newErrors;
  };

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!recaptchaToken) {
      setErrors({ recaptcha: "Please complete the reCAPTCHA" });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ofq7keb",
        "template_kplgzjk",
        { ...formData, recaptchaToken },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessageStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            contactNumber: "",
            subject: "",
            message: "",
          });
          setRecaptchaToken(null);
          setErrors({});
        },
        (err) => {
          console.log("FAILED...", err);
          setMessageStatus("Failed to send the message.");
        }
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (formRef.current && mapRef.current) {
      const formHeight = formRef.current.offsetHeight;
      mapRef.current.style.height = `${formHeight}px`; // Adjust map height to match form height
    }
  }, [formData]); // Recalculate if form data changes

  const handleMapLoad = () => {
    setMapLoading(false); // Set map loading to false when the map is loaded
  };

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <div className="container">
        <div className="xl:w-[700px] mx-auto text-center mb-8">
          <h2 className="heading">Contact Us</h2>
          <p className="text__para">
            Got a technical issue? Want to send feedback about a beta feature? Let us know.
          </p>
        </div>
      </div>

      <style>{`
        .contact-container {
          display: flex;
          flex-direction: column; /* Start with column layout */
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .map-container,
        .form-container {
          flex: 1 1 100%; /* Take full width initially */
          display: flex;
          flex-direction: column;
        }

        .form-container {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .form-container input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }

        .form-container label,
        .form-container input,
        .form-container p {
          font-size: 16px;
        }

        .submit-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          opacity: ${loading ? 0.6 : 1};
          pointer-events: ${loading ? "none" : "auto"};
          width: 100%; /* Make the button take full width */
          box-sizing: border-box;
        }

        /* Mobile-first layout */
        @media (min-width: 768px) {
          .contact-container {
            flex-direction: row; /* Row layout for larger screens */
            gap: 20px;
          }
          .map-container,
          .form-container {
            flex: 1 1 45%; /* Equal width for form and map */
          }
        }

        @media (max-width: 767px) {
          .form-container label,
          .form-container input,
          .form-container p {
            font-size: 14px;
          }
          .form-container input {
            padding: 6px;
          }

          .submit-button {
            padding: 12px 20px; /* Adjust padding for mobile */
          }

          .recaptcha-container {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .submit-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

        }
      `}</style>

      <section style={{ padding: "20px" }}>
        <div className="contact-container">
          <div ref={mapRef} className="map-container">
            {/* Show loader component if map is still loading */}
            {mapLoading && <Loader />} {/* Your loader component */}
            
            {/* Google Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1332678.9833692852!2d-124.38047181249898!3d49.27850731374271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5462ce9005f9dfa5%3A0xce9c6c979ef4fca6!2sMetro%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1731829405455!5m2!1sen!2sca&zoom=12"
              width="100%"
              height="100%"
              style={{ border: "0", width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={handleMapLoad} // Trigger when map is loaded
            />
          </div>
          <div ref={formRef} className="form-container">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactQuestions.map((q, index) => (
                <div key={index}>
                  <label htmlFor={q.key} style={{ display: "block", marginBottom: "8px" }}>
                    {q.question} {q.required && <span style={{ color: "red" }}>*</span>}
                  </label>
                  <input
                    type="text"
                    id={q.key}
                    placeholder={q.placeholder}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid",
                      borderColor: errors[q.key] ? "red" : "#ccc",
                      borderRadius: "4px",
                    }}
                    value={formData[q.key]}
                    onChange={handleChange}
                    required={q.required}
                  />
                  {errors[q.key] && (
                    <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>{errors[q.key]}</p>
                  )}
                </div>
              ))}
              <div className="recaptcha-container">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptcha}
                />
              </div>
              <div className="submit-container">
                <button
                  type="submit"
                  className="submit-button"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
              {errors.recaptcha && <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>{errors.recaptcha}</p>}
              {messageStatus && (
                <p style={{ textAlign: "center", color: messageStatus.includes("success") ? "green" : "red", marginTop: "16px" }}>
                  {messageStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
