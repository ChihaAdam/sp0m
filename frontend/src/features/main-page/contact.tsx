function Contact() {
  return (
    <section
      className="m-12 max-md:m-4 flex flex-col gap-8 text-lg max-md:text-sm"
      id="contact"
    >
      <h2 className="text-4xl max-md:text-2xl font-bold bg-gradiant text-transparent bg-clip-text ">
        contact:
      </h2>
      <ul className="flex justify-evenly flex-wrap gap-4 max-md:gap-2">
        <li className="contact">
          <img
            src="github.svg"
            alt="github"
            className="w-12 h-12 max-md:w-8 max-md:h-8"
          />
          <a href="https://github.com/chihaadam" className="max-md:text-sm">
            chihaadam
          </a>
        </li>
        <li className="contact">
          <img
            src="linkedin.svg"
            alt="linkedin"
            className="w-12 h-12 max-md:w-8 max-md:h-8"
          />
          <a
            href="https://www.linkedin.com/in/chiha-adam-582997324"
            className="max-md:text-sm"
          >
            adam chiha
          </a>
        </li>
        <li className="contact">
          <img
            src="gmail.svg"
            alt="gmail"
            className="w-12 h-12 max-md:w-8 max-md:h-8"
          />
          <a href="mailto:chihaadam137@gmail.com" className="max-md:text-sm">
            chihaadam137@gmail.com
          </a>
        </li>
        <li className="contact">
          <img
            src="portfolio.svg"
            alt="portfolio"
            className="w-12 h-12 max-md:w-8 max-md:h-8"
          />
          <a
            href="https://portfolio-tau-one-88.vercel.app/"
            className="max-md:text-sm"
          >
            portfolio
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Contact;
