import { ImLocation } from "react-icons/im";
import { MdLocalPhone } from "react-icons/md";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import ContactInfoCart from "./ContactInfoCart";

function ContactInfo() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-8">
      <ContactInfoCart
        delay={200}
        contactIcon={
          <SiAmazonsimpleemailservice className="w-[120px] h-[120px]"></SiAmazonsimpleemailservice>
        }
        contactProvider={"  Email Address"}
        contactAddress1={"dreammehedihassan@gmail.com"}
        contactAddress2={"designermehedimb@gmail.com"}
      ></ContactInfoCart>
      <ContactInfoCart
        delay={400}
        contactIcon={
          <MdLocalPhone className="w-[120px] h-[120px]"></MdLocalPhone>
        }
        contactProvider={"  Phone Number"}
        contactAddress1={"(+880) 1716059182"}
        contactAddress2={"(+880) 1783238465"}
      ></ContactInfoCart>
      <ContactInfoCart
        delay={600}
        contactIcon={<ImLocation className="w-[120px] h-[120px]"></ImLocation>}
        contactProvider={"  Location"}
        contactAddress1={"Mirzapur, Tangail"}
        contactAddress2={"Dhaka, Bangladesh"}
      ></ContactInfoCart>
    </div>
  );
}

export default ContactInfo;
