import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "../image/StuffYouShouldKnow.jpg";

function DetailView() {
  return (
    <div style={{ backgroundColor: "#F6F8F9" }}>
      <Row style={{ paddingTop: "30px" }}>
        <Col md={2}></Col>
        <Col md={6}>
          <Row>
            <Col md={4}>
              <Card.Img
                style={{ width: "12rem", height: "12" }}
                src={Image}
                // style={{
                //   borderEndEndRadius: "30",
                //   height: "190px",
                //   width: "190px",
                // }}
              />
            </Col>
            <Col md={6}>
              <Row>
                <h1> Stuff You Should Know</h1>
              </Row>
              <Row>
                <Button variant="outline-dark" style={{ outline: "none" }}>
                  Follow
                </Button>
                <Button variant="outline-dark" style={{ paddingLeft: "30px" }}>
                  Share
                </Button>
              </Row>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row>
            <Col md={7} style={{ textAlign: "left" }}>
              <p1> Stream the best podcasts from your favorite stations</p1>
            </Col>
            <Col md={5}></Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default DetailView;
