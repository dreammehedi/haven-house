const frequentlyAskData = [
  {
    id: 1,
    question: "What is Haven House?",
    answer:
      "Haven House is a shelter and hospitality service dedicated to providing temporary accommodation and support to individuals and families experiencing homelessness or in crisis situations. Our goal is to offer a safe and welcoming environment where guests can access resources and assistance to transition to more stable housing situations.",
  },
  {
    id: 2,
    question: "Who can stay at Haven House?",
    answer:
      "Haven House welcomes individuals and families facing homelessness, crisis situations, or other forms of temporary displacement. Our services are available to anyone in need regardless of age, gender, ethnicity, or background.",
  },
  {
    id: 3,
    question: "How do I access services at Haven House?",
    answer:
      "If you or someone you know requires shelter or support services, please contact our intake coordinator at [phone number] or visit our facility during operating hours. Walk-ins are welcome, but we encourage individuals to call ahead to ensure availability.",
  },
  {
    id: 4,
    question: "Is there a cost for staying at Haven House?",
    answer:
      "No, Haven House does not charge guests for accommodation or support services. Our services are provided free of charge thanks to the generosity of our donors, volunteers, and community partners.",
  },
  {
    id: 5,
    question: "What amenities are available at Haven House?",
    answer:
      "Our facility offers clean and comfortable sleeping accommodations, restroom and shower facilities, nutritious meals, access to basic hygiene products, and supportive services such as case management, counseling, and referrals to community resources.",
  },
  {
    id: 6,
    question: "How long can I stay at Haven House?",
    answer:
      "The length of stay at Haven House varies depending on individual circumstances and availability. Our goal is to assist guests in finding more permanent housing solutions as quickly as possible, but we strive to accommodate individuals for as long as necessary to ensure their stability and well-being.",
  },
  {
    id: 7,
    question: "Is Haven House accessible for individuals with disabilities?",
    answer:
      "Yes, Haven House is committed to providing accessible accommodations and services for individuals with disabilities. Please inform our staff of any specific needs or accommodations required, and we will do our best to accommodate them.",
  },
  {
    id: 8,
    question: "Can I volunteer or donate to Haven House?",
    answer:
      "Absolutely! We rely on the support of volunteers and donors to continue providing vital services to our community. If you're interested in volunteering your time, making a donation, or organizing a fundraising event, please visit our website or contact our volunteer coordinator for more information.",
  },
  {
    id: 9,
    question:
      "How can I support Haven House if I'm unable to volunteer or donate?",
    answer:
      "You can support Haven House by spreading awareness about our services, advocating for policies that address homelessness and housing insecurity, and connecting individuals in need with our resources. Additionally, you can follow us on social media, sign up for our newsletter, or attend our community events to stay engaged and informed.",
  },
  {
    id: 10,
    question: "How can I contact Haven House for more information?",
    answer:
      "For more information about Haven House, our services, or ways to get involved, please contact us at [email address] or [phone number]. Our staff are available to assist you during our operating hours, and we welcome inquiries from individuals, organizations, and community members alike.",
  },
];

function Accordion() {
  return (
    <div className="join join-vertical w-full">
      {frequentlyAskData.map((accordion) => {
        const { id, question, answer } = accordion;
        return (
          <div
            key={id}
            className={`${
              id === frequentlyAskData.length ? "border-b-0" : ""
            } collapse collapse-arrow join-item border-b border-base-300`}
          >
            <input
              type="radio"
              name="my-accordion-4"
              defaultChecked={id === 1}
            />
            <div className="collapse-title text-xl font-medium">{question}</div>
            <div className="collapse-content">
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
