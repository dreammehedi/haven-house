import { useForm } from "react-hook-form";
import Button from "../../shareComponents/Button";
import SectionTitle from "../../shareComponents/SectionTitle";

function ContactForm() {
  const { register, handleSubmit } = useForm();

  const handleContactInfo = (data) => {
    const { firstName, number, lastName, message, gender, birth, email } = data;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(number);
    console.log(birth);
    console.log(gender);
    console.log(message);
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
        onSubmit={handleSubmit(handleContactInfo)}
        className="flex flex-col space-y-6 w-full md:max-w-3xl mx-auto bg-white/80 p-4 text-center md:p-8 lg:p-10 rounded-3xl font-poppins"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          Provide Your Full Information
        </h1>
        <input
          {...register("firstName", { required: true })}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter Your First Name..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500/50"
        />
        <input
          {...register("lastName")}
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Your Last Name..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500/50"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          {...register("number", { required: true })}
          type="number"
          name="number"
          id="number"
          placeholder="Enter Your Number..."
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
        />
        <input
          {...register("birth")}
          type="date"
          name="birth"
          id="birth"
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-400 outline-none focus:ring-1 focus:ring-green-500"
        />
        <div className="flex gap-1 w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50  focus:text-gray-800 text-gray-400 outline-none focus:ring-1 focus:ring-green-500">
          <label htmlFor="male">Male</label>
          <input
            {...register("gender")}
            type="radio"
            name="gender"
            id="male"
            value="male"
          />
          <label htmlFor="female">Female</label>
          <input
            {...register("gender")}
            type="radio"
            name="gender"
            id="female"
            value="female"
          />
        </div>
        <textarea
          {...register("message")}
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
