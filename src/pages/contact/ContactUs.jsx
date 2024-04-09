import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import SectionTitle from "../../shareComponents/SectionTitle";

function ContactUs() {
  return (
    <>
      <section className="my-6 md:my-8 lg:my-10">
        <SectionTitle
          title="Contact Address"
          description={
            "A contact address description typically refers to providing information about where an individual or organization can be reached. It usually includes details such as the physical address, email address, phone number, and possibly other relevant contact information."
          }
        ></SectionTitle>
        <ContactInfo></ContactInfo>
      </section>

      <section className="my-6 md:my-8 lg:my-10 bg-green-50">
        <ContactForm></ContactForm>
      </section>
    </>
  );
}

export default ContactUs;
