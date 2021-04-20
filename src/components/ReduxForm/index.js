import React from "react";
import ContactForm from "./form";

class ContactPage extends React.Component {
  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  };
  render() {
    return <ContactForm onSubmit={this.handleSubmit} />;
  }
}

export default ContactPage;
