import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        emailjs
            .sendForm(
                    'service_2rb0c2e',
                    "template_kxt4vwf",
                    form.current,
                    process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    console.log("SUCCESS! Result:", result);
                    setSuccess(true);
                    form.current.reset();
                },
                (error) => {
                    console.error("FAILED... Error:", error);
                    setError(
                        `Failed to send message. Error: ${error.text || "Unknown error"}`
                    );
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="container">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />
                </div>

                <div className="form-group">
          <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
          ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {error && <p className="error-message">{error}</p>}
                {success && (
                    <p className="success-message">Message sent successfully!</p>
                )}
            </form>
        </section>
    );
};

export default Contact;