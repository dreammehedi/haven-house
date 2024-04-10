import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import Button from "../../shareComponents/Button";
import SectionTitle from "../../shareComponents/SectionTitle";
function ContactForm() {
  const form = useRef();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Your message has been sent!");
          form.current.reset();
        },
        () => {
          toast.error("An error has occurred!");
        }
      );
  };

  return (
    <div className="container py-6 md:py-8 lg:py-10">
      <SectionTitle
        title={`Let's Talk About You`}
        description={
          "Provide clear and accurate contact details, including a physical address, phone number, and email address. This helps users reach out through their preferred means of communication."
        }
      ></SectionTitle>

      <form
        data-aos="zoom-in"
        data-aos-duration="1000"
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-6 w-full md:max-w-3xl mx-auto bg-white/80 p-4 text-center md:p-8 lg:p-10 rounded-3xl font-poppins"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          Provide Your Full Information
        </h1>
        <input
          required
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter Your First Name..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500/50"
        />
        <input
          required
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Your Last Name..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500/50"
        />
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          required
          type="number"
          name="number"
          id="number"
          placeholder="Enter Your Number..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          required
          type="date"
          name="birth"
          id="birth"
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-400 outline-none focus:ring-1 focus:ring-green-500"
        />
        <div className="flex gap-1 w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50  focus:text-gray-800 text-gray-400 outline-none focus:ring-1 focus:ring-green-500">
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" id="female" value="female" />
        </div>
        <textarea
          required
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter Your Message..."
        ></textarea>
        <Button type={"submit"} cls={"!mx-auto"} name="Submit"></Button>
      </form>
    </div>
  );
}

export default ContactForm;
