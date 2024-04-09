import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";

function ContactUs() {
  return (
    <>
      <section className="my-6 md:my-8 lg:my-10">
        <ContactInfo></ContactInfo>
      </section>

      <section className="my-6 md:my-8 lg:my-10 bg-green-50">
        <ContactForm></ContactForm>
      </section>
    </>
  );
}

export default ContactUs;
