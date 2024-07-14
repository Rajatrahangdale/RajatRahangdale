import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* Right part */}
      <div className="c-right">
        <form action="">
          <input
            type="text"
            name="user-name"
            className="user"
            id="text"
            placeholder="Name"
          />
          <input
            type="email"
            name="user-email"
            className="user"
            id="text"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            id="text"
            placeholder="Massage"
          />
          <input
            type="submit"
            value="Send"
            className="button"
            id="text"
            placeholder="Name"
          />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <span>{"thanks for contacting me..!"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
