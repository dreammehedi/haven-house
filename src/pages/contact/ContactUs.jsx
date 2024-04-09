import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactMap from "../../components/contact/ContactMap";
import SectionTitle from "../../shareComponents/SectionTitle";

function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Haven House | Contact Us</title>
      </Helmet>
      {/* contact address */}
      <section className="my-6 md:my-8 lg:my-10">
        <SectionTitle
          title="Contact Address"
          description={
            "A contact address description typically refers to providing information about where an individual or organization can be reached. It usually includes details such as the physical address, email address, phone number, and possibly other relevant contact information."
          }
        ></SectionTitle>
        <ContactInfo></ContactInfo>
      </section>

      {/* contact form */}
      <section className="my-6 md:my-8 lg:my-10 bg-green-50">
        <ContactForm></ContactForm>
      </section>

      {/* contact location map */}
      <section className="mt-6 md:mt-8 lg:mt-10">
        <ContactMap></ContactMap>
      </section>
    </>
  );
}

export default ContactUs;
