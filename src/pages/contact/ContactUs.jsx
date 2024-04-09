import { SiAmazonsimpleemailservice } from "react-icons/si";
import ContactInfoCart from "../../components/contact/ContactInfoCart";

function ContactUs() {
  return (
    <section className="my-6 md:my-8 lg:my-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-8">
        <ContactInfoCart
          contactIcon={
            <SiAmazonsimpleemailservice className="w-[130px] h-[130px]"></SiAmazonsimpleemailservice>
          }
          contactProvider={"  Email Address"}
          contactAddress1={"dreammehedihassan@gmail.com"}
          contactAddress2={"designermehedimb@gmail.com"}
        ></ContactInfoCart>
        <ContactInfoCart
          contactIcon={
            <SiAmazonsimpleemailservice className="w-[130px] h-[130px]"></SiAmazonsimpleemailservice>
          }
          contactProvider={"  Phone Number"}
          contactAddress1={"(+880) 1716059182"}
          contactAddress2={"(+880) 1783238465"}
        ></ContactInfoCart>
        <ContactInfoCart
          contactIcon={
            <SiAmazonsimpleemailservice className="w-[130px] h-[130px]"></SiAmazonsimpleemailservice>
          }
          contactProvider={"  Location"}
          contactAddress1={"Mirzapur, Tangail"}
          contactAddress2={"Dhaka, Bangladesh"}
        ></ContactInfoCart>
      </div>
    </section>
  );
}

export default ContactUs;
