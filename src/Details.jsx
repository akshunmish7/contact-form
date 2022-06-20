import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import database from "./firebase";
import {ref, set } from "firebase/database";

const Detail = () => {
  
  const [formData, setFormData] = useState({
   name: "",
   email: "",
   phone: "",
   subject: "",
   message: ""
   });
  const { name, email, phone,subject, message } = formData;
  function writeUserData() {
    set(ref(database), {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
      
    });
  }
  const handleSubmit = e => {
    e.preventDefault();
  writeUserData();
    alert("Form submitted");
  };
  const handleChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Contact form</h1>
      <Form onSubmit={handleSubmit}>  
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <br />
          <Form.Control onChange={handleChange} name="name" placeholder="Name" value={name} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <br />
          <Form.Control onChange={handleChange} name="email" placeholder="Enter email" value={email} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <br />
          <Form.Control onChange={handleChange} name="phone" placeholder="Mobile number" value={phone} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <br />
          <Form.Control onChange={handleChange} name="subject" placeholder="Subject" value={subject} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <br />
          <Form.Control onChange={handleChange} name="message" placeholder="Message" value={message} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    </>
  );
};

export default Detail;
