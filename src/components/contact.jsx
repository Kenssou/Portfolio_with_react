import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <div
      className="lg:mt-[100px] mt-[100px] lg:max-w-[1204px] flex flex-col m-auto"
      id="contact"
    >
      <h1 class="lg:text-[25px] xl:text-[25px] text-[20px] m-auto font-bold bg-gradient-to-bl from-purple-500 to-indigo-800 bg-clip-text text-transparent leading-normal">
        Contact
      </h1>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
