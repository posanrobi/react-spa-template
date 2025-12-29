import ContactForm from "./ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Készen állsz az indulásra?</h2>
            <p>Vedd fel velünk a kapcsolatot és kezdjük el még ma.</p>
            <GoogleReCaptchaProvider reCaptchaKey="6LdIYTosAAAAAPOqDB66vJ9WnPLy_a_lt8YgCuzm">
                <ContactForm />
            </GoogleReCaptchaProvider>
        </section>
    );
};

export default Contact;
