// src/components/Contact/Contact.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: null });

    const validateForm = (formData) => {
        if (!formData.name.trim()) return 'Name is required';
        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) return 'Valid email is required';
        if (!formData.message.trim() || formData.message.trim().length < 10) return 'Message must be at least 10 characters';
        return null;
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(form.current));
        const validationError = validateForm(formData);

        if (validationError) {
            setStatus({ type: 'error', message: validationError });
            return;
        }

        try {
            setIsSubmitting(true);
            setStatus({ type: null, message: null });

            await emailjs.sendForm(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                form.current,
                'YOUR_USER_ID' // Replace with your EmailJS user ID
            );

            setStatus({ type: 'success', message: 'Message sent successfully!' });
            form.current.reset();
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return ( <
        section id = "contact"
        className = "container" >
        <
        h2 > Contact Me < /h2>

        <
        form ref = { form }
        onSubmit = { handleSubmit }
        className = "contact-form" >
        <
        div className = "form-group" >
        <
        label htmlFor = "name" > Name < /label> <
        input type = "text"
        id = "name"
        name = "name"
        placeholder = "Enter your name"
        disabled = { isSubmitting }
        /> <
        /div>

        <
        div className = "form-group" >
        <
        label htmlFor = "email" > Email < /label> <
        input type = "email"
        id = "email"
        name = "email"
        placeholder = "Enter your email"
        disabled = { isSubmitting }
        /> <
        /div>

        <
        div className = "form-group" >
        <
        label htmlFor = "message" > Message < /label> <
        textarea id = "message"
        name = "message"
        placeholder = "Enter your message"
        rows = "5"
        disabled = { isSubmitting } >
        < /textarea> <
        /div>

        {
            status.message && ( <
                div className = { `status-message ${status.type}` } > { status.message } <
                /div>
            )
        }

        <
        button type = "submit"
        className = "submit-btn"
        disabled = { isSubmitting } >
        { isSubmitting ? 'Sending...' : 'Send Message' } <
        /button> <
        /form> <
        /section>
    );
};

export default Contact;