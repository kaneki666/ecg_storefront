import React from "react";
import ContactUsInfo from "./ContactUsInfo";
import ContactUsQA from "./ContactUsQA";
import ContactUsSendMsg from "./ContactUsSendMsg";

const ContactUsContent = () => {
  return (
    <div className="page-content contact-us">
      <div className="container">
        <ContactUsInfo/>
        <hr className="divider mb-10 pb-1" />

        <section className="contact-section">
          <div className="row gutter-lg pb-3">
            <ContactUsQA/>
          <ContactUsSendMsg/>     
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsContent;
