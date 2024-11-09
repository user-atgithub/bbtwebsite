import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { contactQuestions } from '../../Assets/data/contactQuestions.js'; // Import the questions

const ChatInterface = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''  // Make sure message is part of formData
    });
    const [messageStatus, setMessageStatus] = useState('');
    const [inputValue, setInputValue] = useState('');

    // Toggle chat open/close and reset message status when opening
    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setMessageStatus('');  // Clear success message on reopening
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleNext = () => {
        if (inputValue.trim() === '') return;

        // Clear message status if user starts a new interaction after sending
        if (messageStatus) setMessageStatus('');

        const currentStep = contactQuestions[step];
        setFormData({
            ...formData,
            [currentStep.key]: inputValue
        });

        setInputValue('');

        if (step === contactQuestions.length - 1) {
            handleSubmit();  // Final submission if it's the last step
        } else {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            const previousStep = contactQuestions[step - 1];
            setInputValue(formData[previousStep.key] || '');
            setStep(step - 1);
        }
    };

    const handleSubmit = () => {
        // Ensure the final input is saved to the message field
        const updatedFormData = { 
            ...formData,
            message: formData.message || inputValue  // If message is empty, set it to inputValue
        };

        console.log("Form data being sent:", updatedFormData); // Check the data before sending

        emailjs.send('service_ofq7keb', 'template_kplgzjk', updatedFormData, '-DOGhLMLwNhbIz-Ca')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageStatus('Message sent successfully!');
                setStep(0);  // Reset steps for new interaction
                setFormData({  // Clear form data
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                setMessageStatus('Failed to send the message.');
            });
    };

    return (
        <>
            <button
                onClick={toggleChat}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: 'transparent',
                    color: '#007bff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    zIndex: 1000
                }}
            >
                💬
            </button>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '0',
                    right: '0',
                    width: '300px',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    padding: '10px',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    zIndex: 1000
                }}>
                    <button
                        onClick={toggleChat}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px',
                            color: '#007bff'
                        }}
                    >
                        ✖️
                    </button>
                    <div>
                        {contactQuestions[step] && <p>{contactQuestions[step].question}</p>}
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type your response here..."
                            style={{
                                width: '100%',
                                padding: '8px',
                                boxSizing: 'border-box'
                            }}
                        />
                        <div style={{ marginTop: '10px' }}>
                            {step > 0 && (
                                <button
                                    onClick={handleBack}
                                    style={{
                                        marginRight: '10px',
                                        backgroundColor: '#6c757d',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        padding: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                style={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                {step === contactQuestions.length - 1 ? 'Send' : 'Next'}
                            </button>
                        </div>
                    </div>
                    {messageStatus && (
                        <p style={{ color: 'green', marginTop: '10px' }}>
                            {messageStatus}
                        </p>
                    )}
                </div>
            )}
        </>
    );
};

export default ChatInterface;
