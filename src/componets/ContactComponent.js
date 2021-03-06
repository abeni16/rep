import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minlength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit(values) {
    console.log("current state is" + JSON.stringify(values));
    alert("current state is" + JSON.stringify(values));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              AASTU
              <br />
              block 8
              <br />
              ADISS ABABA,Ethiopia
              <br />
              <i className="fa fa-phone"></i>: +251 991 219 569
              <br />
              <i className="fa fa-fax"></i>: +251 955 430 554
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
            <div className="col-12 col-md-9">
              <LocalForm onSubmit={(values) => this.handelSubmit(values)}>
                <Row className="form-group">
                  <Label for="firstname" md={2}>
                    First name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      className="form-control"
                      model=".firstname"
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                      validators={{
                        required,
                        minlength: minlength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required: "Required",
                        minlength: "must be greaterthan 2 charachter",
                        maxLength: "must be 15 charachrers or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label for="lastname" md={2}>
                    Last name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".lastname"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                      validators={{
                        required,
                        minlength: minlength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".lastname"
                      show="touched"
                      messages={{
                        required: "Required",
                        minlength: "must be greaterthan 2 charachter",
                        maxLength: "must be 15 charachrers or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label for="telnum" md={2}>
                    Contact number.
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".telnum"
                      className="form-control"
                      id="telnum"
                      name="telnum"
                      placeholder="Telephone number"
                      validators={{
                        required,
                        minlength: minlength(3),
                        maxLength: maxLength(15),
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".telnum"
                      show="touched"
                      messages={{
                        required: "Required",
                        minlength: "must be greaterthan 2 numbers",
                        maxLength: "must be 15 number or less",
                        isNumber: "must be a numbers",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label for="email" md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      validators={{
                        required,
                        validEmail,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: "Required",
                        validEmail: "invalid email address",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 6, offset: 2 }}>
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox
                          model=".agree"
                          className="form-check-input"
                          name="agree"
                        />
                        <strong>may we contact you?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <Control.select
                      model=".contactType"
                      name="contactType"
                      className="form-control"
                    >
                      <option> Tel.</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlfor="email" md={2}>
                    your Feedback
                  </Label>
                  <Col md={10}>
                    <Control.textarea
                      model=".message"
                      id="message"
                      name="message"
                      rows="12"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
