import express from 'express';
import emailjs from 'emailjs-com';

const router = express.Router();

router.post('/contact', async (req, res) => {
    const { formData } = req.body;

    // Handle email sending with emailjs
    emailjs.send('service_ofq7keb', 'template_kplgzjk', formData, process.env.EMAILJS_PUBLIC_KEY)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            res.status(200).json({ message: 'Message sent successfully!' });
        }, (err) => {
            console.log('FAILED...', err);
            res.status(500).json({ message: 'Failed to send the message.' });
        });
});

export default router;
