import express from 'express';
import emailjs from 'emailjs-com';
import { createAssessment } from '../service/recaptchaValidation.js'; // Import the function

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { formData, recaptchaToken } = req.body;

    // Validate reCAPTCHA token
    const recaptchaAction = "contact-form-submit"; // Example action name
    const score = await createAssessment(recaptchaToken, recaptchaAction);

    if (score === null || score < 0.5) { // Adjust the score threshold as needed
        return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    // Handle email sending with emailjs
    emailjs.send('service_ofq7keb', 'template_kplgzjk', formData, 'your_frontend_emailjs_public_key')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            res.status(200).json({ message: 'Message sent successfully!' });
        })
        .catch((err) => {
            console.log('FAILED...', err);
            res.status(500).json({ message: 'Failed to send the message.' });
        });
});

export default router;
