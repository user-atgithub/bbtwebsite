import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { contactQuestions } from '../Assets/data/contactQuestions.js'; // Import the questions

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [messageStatus, setMessageStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_ofq7keb', 'template_kplgzjk', formData, '-DOGhLMLwNhbIz-Ca')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageStatus('Message sent successfully!');
            }, (err) => {
                console.log('FAILED...', err);
                setMessageStatus('Failed to send the message.');
            });
    };

    return (
        <section>
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="heading text-center">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text_para">
                    Got a technical issue? Want to send feedback about a beta feature? Let us know.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {contactQuestions.map((q, index) => (
                        <div key={index}>
                            <label htmlFor={q.key} className="form__label">
                                {q.question}
                            </label>
                            <input
                                type="text"
                                id={q.key}
                                placeholder={q.placeholder} // Use placeholder from contactQuestions
                                className="form__input mt-1"
                                value={formData[q.key]}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="btn rounded sm:w-fit"
                    >
                        Submit
                    </button>
                </form>
                {messageStatus && <p>{messageStatus}</p>}
            </div>
        </section>
    );
};

export default Contact;
