import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import database from "./firebase";
import { ref, set } from "firebase/database";

const Detail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { name, email, phone, subject, message } = formData;
  function writeData() {
    set(ref(database), {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    });
  }
  const handleSubmit = (e) => {
    if (!name || !email || !phone || !subject || !message) {
      e.preventDefault();
      alert("Please fill all the fields");
    } else {
      e.preventDefault();
      writeData(formData);
      alert("Form submitted");
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="card md-3" style={{border:"5px solid black",padding:"1em",marginTop:"15vh",marginLeft:"20vh",marginRight:"20vh",justifyContent:"center" , alignItems:"center" }}>

        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=2000"
              alt="Gradient"
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card mb-3" style={{border:"2px solid black",justifyContent:"center" , alignItems:"center" }}>Contact form</h3>
              <Form
                className="card-text"
                onSubmit={handleSubmit}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <br />
                  <Form.Control
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    value={name}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <br />
                  <Form.Control
                    onChange={handleChange}
                    name="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[gmail]+\.[com]{3,}$"
                    placeholder="Enter email"
                    value={email}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <br />
                  <Form.Control
                    onChange={handleChange}
                    name="phone"
                    type="number"
                    placeholder="Mobile number"
                    value={phone}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <br />
                  <Form.Control
                    onChange={handleChange}
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={subject}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <br />
                  <Form.Control
                    onChange={handleChange}
                    name="message"
                    type=""
                    placeholder="Message"
                    value={message}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
