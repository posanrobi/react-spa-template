import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    /*  const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    }); */
    const [status, setStatus] = useState(null);
    const [sending, setSending] = useState(false);

    /* const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }; */

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        // email küldés - EmailJS → Brevo → weboldal tulajnak email
        emailjs
            .sendForm(
                "service_uo0q7ea", // ← EmailJS Brevo service ID
                "template_21fh0km", // ← Template ID
                e.target,
                "xLBQ-h8JSapL6Fa6y" // ← EmailJS User ID (nyilvános!)
            )
            .then(() => {
                setStatus("success");
                e.target.reset();
            })
            .catch(() => {
                setStatus("error");
            })
            .finally(() => {
                setSending(false);
            });
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
