import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "../image/iheart.jpg";

function Header() {
  return (
    <Navbar sticky="top" style={{ backgroundColor: "#FFFFFF" }}>
      <Row>
        <Col md={2}>
          <Row>
            <Col>
              <Card.Img
                src={Image}
                style={{
                  borderEndEndRadius: "30",
                  height: "40px",
                  width: "40px",
                }}
              />
            </Col>
            <Col style={{ paddingRight: "80px" }}>
              <Navbar.Brand href="#home">
                <h5>
                  <strong> iHeart</strong>RADIO{" "}
                </h5>
              </Navbar.Brand>
            </Col>
          </Row>
        </Col>
        <Col md={8} style={{ alignContent: "center" }}>
          <Row>
            <Col md={3}></Col>
            <Col md={3} style={{ alignContent: "left" }}>
              <p> Your libary </p>
            </Col>
            <Col md={3} style={{ alignContent: "center" }}>
              <p href=""> Prodcast </p>
            </Col>
            <Col md={3} style={{ alignContent: "right" }}>
              <p href=""> News </p>
            </Col>
          </Row>
        </Col>
        <Col md={2} style={{ alignContent: "right" }}>
          <Form>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 rounded-top"
            />
          </Form>
        </Col>
      </Row>
    </Navbar>
  );
}

export default Header;
