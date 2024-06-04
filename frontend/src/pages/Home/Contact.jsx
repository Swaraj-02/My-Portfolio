import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const { Contacts } = portfolioData;

  console.log(Contacts);

  return (
    <section className="contact-section">
      <div className="container">
        <SectionTitle title="Say hello" />
      </div>
      <div className="contact-box container">
        <div className="contact-left-item">
          <h4 className="curly-bracket">{"{"}</h4>
          <div className="contact-content">
            {Object.keys(Contacts).map(
              (items, index) =>
                // Check if the property doesn't start with an underscore
                !items.startsWith("_") && (
                  <p className="content-text" key={index}>
                    <span>{items.toUpperCase()} : </span>
                    <span className="span-text">{Contacts[items]}</span>
                  </p>
                )
            )}
          </div>
          <h4 className="curly-bracket">{"}"}</h4>
        </div>
        <div className="contact-right-item">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
