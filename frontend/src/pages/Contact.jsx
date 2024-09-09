import React, { useState } from "react";
import emailjs from 'emailjs-com';

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

        // Prepare the data to be sent to EmailJS
        const emailParams = {
            name: formData.name,       // Sender's name
            message: formData.message,  // Message body
            email: formData.email,   // 
            subject: formData.subject   // Optional: if you want to include the subject
        };

        // Send email using EmailJS
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
                    <div>
                        <label htmlFor="name" className="form__label">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="form__input mt-1"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form__label">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="form__input mt-1"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="form__label">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Let us know how we can help you"
                            className="form__input mt-1"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form__label">
                            Your Message
                        </label>
                        <textarea
                            rows="6"
                            id="message"
                            placeholder="Leave a comment...."
                            className="form__input mt-1"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
