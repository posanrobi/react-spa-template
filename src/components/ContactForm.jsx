import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
    /*  const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    }); */
    const [status, setStatus] = useState(null);
    const [sending, setSending] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    /* const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }; */

    const handleSubmit = async (e) => {
        e.preventDefault();

        //  Honeypot
        if (e.target.company.value) {
            return;
        }

        if (!executeRecaptcha) {
            setStatus("error");
            return;
        }

        setSending(true);
        setStatus(null);

        try {
            const token = await executeRecaptcha("contact_form");

            if (!token) {
                throw new Error("No recaptcha token");
            }

            //  Email küldés
            await emailjs.sendForm(
                "service_uo0q7ea", // ← EmailJS Brevo service ID
                "template_21fh0km", // ← Template ID
                e.target,
                "xLBQ-h8JSapL6Fa6y" // ← EmailJS User ID (nyilvános!)
            );

            setStatus("success");
            e.target.reset();
        } catch (err) {
            setStatus("error");
            console.error(err);
        } finally {
            setSending(false);
        }
    };

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                {/* honeypot field */}
                <input
                    type="text"
                    name="company"
                    tabIndex="-1"
                    autoComplete="off"
                    style={{ display: "none" }}
                />
                <input
                    type="text"
                    name="name"
                    /*   onChange={handleChange} */
                    placeholder="Add meg a neved"
                    required
                ></input>

                <input
                    type="email"
                    name="email"
                    /* onChange={handleChange} */
                    placeholder="Add meg az emailed"
                    required
                ></input>

                <textarea
                    name="message"
                    /*  onChange={handleChange} */
                    rows="4"
                    placeholder="Írd ide az üzeneted..."
                    minLength={10}
                    required
                ></textarea>

                <button disabled={sending} type="submit">
                    {`${sending ? "Küldés folyamatban..." : "Küldés"}`}
                </button>

                {status && (
                    <div className={`status ${status}`}>
                        {status === "success"
                            ? "✅ Üzenet sikeresen elküldve!"
                            : "❌ Hiba történt az üzenet küldésekor. Kérjük, próbáld újra."}
                    </div>
                )}
            </form>
        </>
    );
};

export default ContactForm;
