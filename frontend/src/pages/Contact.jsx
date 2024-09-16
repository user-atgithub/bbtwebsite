import React, { useState } from "react";
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { contactQuestions } from '../Assets/data/contactQuestions.js';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [messageStatus, setMessageStatus] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        setErrors({ ...errors, [e.target.id]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['name', 'email', 'contactNumber', 'message'];

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
            setErrors({ recaptcha: 'Please complete the reCAPTCHA' });
            return;
        }

        setLoading(true);

        emailjs.send('service_ofq7keb', 'template_kplgzjk', { ...formData, recaptchaToken }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    contactNumber: '',
                    subject: '',
                    message: '',
                });
                setRecaptchaToken(null);
                setErrors({});
            }, (err) => {
                console.log('FAILED...', err);
                setMessageStatus('Failed to send the message.');
            })
            .finally(() => setLoading(false));
    };

    return (
        <section style={{ padding: '20px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>Contact Us</h2>
                <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Got a technical issue? Want to send feedback about a beta feature? Let us know.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {contactQuestions.map((q, index) => (
                        <div key={index}>
                            <label htmlFor={q.key} style={{ display: 'block', marginBottom: '8px' }}>
                                {q.question} {q.required && <span style={{ color: 'red' }}>*</span>}
                            </label>
                            <input
                                type="text"
                                id={q.key}
                                placeholder={q.placeholder}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    border: '1px solid',
                                    borderColor: errors[q.key] ? 'red' : '#ccc',
                                    borderRadius: '4px'
                                }}
                                value={formData[q.key]}
                                onChange={handleChange}
                                required={q.required}
                            />
                            {errors[q.key] && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors[q.key]}</p>
                            )}
                        </div>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ReCAPTCHA
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Use Vite environment variable
                            onChange={handleRecaptcha}
                            style={{ marginRight: '10px' }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                opacity: loading ? 0.6 : 1,
                                pointerEvents: loading ? 'none' : 'auto',
                            }}
                        >
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                    {errors.recaptcha && (
                        <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.recaptcha}</p>
                    )}
                    {messageStatus && <p style={{ textAlign: 'center', color: messageStatus.includes('success') ? 'green' : 'red', marginTop: '16px' }}>{messageStatus}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
