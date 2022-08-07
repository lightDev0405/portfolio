import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
  return (
    <section className="w-full pb-5 md:pb-9" name="contact">
      <div className="max-w-[900px] mx-auto px-8">
        <h1 className="text-3xl md:text-4xl border-b-4 inline-block border-theme-white mb-4">
          Contact
        </h1>
        <p className="text-base md:text-lg">
          To contact me, fill in the form below or{' '}
          <a
            href="mailto:tiagoleite1405@gmail.com"
            className="underline decoration-solid underline-offset-2"
          >
            send an email
          </a>
          . I am available for hire and open to any ideas of cooperation.
        </p>
        <form
          className="flex flex-col w-full max-w-[600px] mx-auto pt-12"
          action="https://getform.io/f/8010a764-5271-4d08-b8af-58a7d3654b1e"
          method="POST"
        >
          <input
            className="p-2 md:p-2.5 rounded-sm bg-theme-white text-theme-black text-lg outline-none"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="p-2 md:p-2.5 my-3 md:my-4 rounded-sm bg-theme-white text-theme-black text-lg outline-none"
            type="email"
            placeholder="Email"
            name="email"
            required
          ></input>
          <textarea
            className="rounded-sm bg-theme-white p-2 md:p-4 text-theme-black text-lg outline-none"
            name="message"
            placeholder="Message"
            rows="7"
            required
          ></textarea>
          <button className="w-28 h-11 md:w-32 md:h-12 flex items-center justify-center cursor-pointer hover:text-white active:text-white duration-200 bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 rounded text-lg md:text-xl mt-3 md:mt-5 mx-auto">
            Send <RiSendPlaneFill className="ml-3" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
