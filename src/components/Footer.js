import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "../image/tbfc.jpg";
import FontAwesome from "react-fontawesome";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    // <Navbar fixed="bottom">
    <Row>
      <Col>
        <Row>
          <Col>
            <Card.Img
              src={Image}
              style={{
                height: "90px",
                width: "90px",
              }}
            />
          </Col>
          <Col>
            <p> The Breakfast Club</p>
            <p> Low key Step Mom </p>
          </Col>
        </Row>
      </Col>
      <Col>
        <AudioPlayer autoPlay src="http://example.com/audio.mp3" />
      </Col>
      <Col>
        <FontAwesome className="super-crazy-colors" name="rocket" size="20x" />
      </Col>
    </Row>
    // </Navbar>
  );
}

export default Footer;
