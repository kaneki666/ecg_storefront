import React from "react";

const ContactUsSendMsg = () => {
  return (
<div className="col-lg-6 mb-8">
    <h4 className="title mb-3">Send Us a Message</h4>
    <form className="form contact-us-form" action="#" method="post">
    <div className="form-group">
        <label htmlFor="username">Your Name</label>
        <input
        type="text"
        id="username"
        name="username"
        className="form-control"
        />
    </div>
    <div className="form-group">
        <label htmlFor="email_1">Your Email</label>
        <input
        type="email"
        id="email_1"
        name="email_1"
        className="form-control"
        />
    </div>
    <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
        id="message"
        name="message"
        cols={30}
        rows={5}
        className="form-control"
        ></textarea>
    </div>
    <button type="submit" className="btn btn-dark btn-rounded">
        Send Now
    </button>
    </form>
</div>
  );
};

export default ContactUsSendMsg;
