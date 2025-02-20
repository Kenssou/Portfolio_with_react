export default function ContactForm() {
  return (
    <div className="lg:mt-[50px] mt-[20px] lg:max-w-[900px] xl:max-w-[1150px] md:w-[600px] xl:ml-[100px] w-[320px] m-auto lg:m-auto">
      <form id="emailForm" className="m-auto">
        <div className="m-auto">
          <h3 className="text-gray-500 font-medium">Your Name</h3>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="xl:w-[1000px] lg:w-[600px] w-[100%] bg-white border-solid border-2 border-purple-300 h-[50px] mt-[10px] rounded-[5px] p-4 font-regular"
            name="name"
          />
        </div>
        <div className="pt-[30px]">
          <h3 className="text-gray-500 font-medium">Your Email</h3>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="xl:w-[1000px]  bg-white  lg:w-[600px] w-[100%] border-solid border-2 border-purple-300 h-[50px] mt-[10px] rounded-[5px] p-4 font-regular"
            name="email"
          />
        </div>
        <div className="pt-[30px]">
          <h3 className="text-gray-500 font-medium">Your Phone Number</h3>
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="xl:w-[1000px]  bg-white  lg:w-[600px] w-[100%] border-solid border-2 border-purple-300 h-[50px] mt-[10px] rounded-[5px] p-4 font-regular"
            name="phone"
          />
        </div>
        <div className="pt-[30px]">
          <h3 className="text-gray-500 font-medium">Your Message</h3>
          <textarea
            placeholder="Enter Your Message"
            name="message"
            id="yourMessage"
            className="xl:w-[1000px] lg:w-[600px] w-[100%]  bg-white  border-solid border-2 border-purple-300 h-[200px] mt-[10px] rounded-[5px] p-4 font-medium placeholder:-translate-y-11"
          ></textarea>
        </div>
        <button
          type="submit"
          id="sendMessage"
          className="w-[320px] h-[50px] mt-[20px] rounded-[10px] bg-[purple] ml-[0px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-[20px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
