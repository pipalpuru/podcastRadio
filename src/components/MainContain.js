import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import Image2 from "../image/StuffYouShouldKnow.jpg";
import Image3 from "../image/codeswitch.jpg";
import Image4 from "../image/crimejunkie.png";
import FontAwesome from "react-fontawesome";

const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 },
];

function MainContain() {
  return (
    <div style={{ backgroundColor: "#F6F8F9" }}>
      <Row style={{ paddingTop: "30px" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col md={10} style={{ textAlign: "left" }}>
              <h2>
                <strong> Stream Top Podcasts </strong>{" "}
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={7} style={{ textAlign: "left" }}>
              <p1> Stream the best podcasts from your favorite stations</p1>
            </Col>
            <Col md={5}>
              <Select options={Countries} />
            </Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col md={10} style={{ textAlign: "left" }}>
              <h4>
                <strong> Popular Podcasts</strong>{" "}
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <a href="">
                    <Card.Img
                      src={Image2}
                      style={{
                        borderEndEndRadius: "30",
                        height: "190px",
                        width: "190px",
                      }}
                    />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={10}>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <strong> Stuff You Should Know</strong>{" "}
                  </p>
                </Col>
                <Col ms={2}></Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p style={{ textAlign: "center" }}>
                    If you've ever wanted to know
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <a href="">
                    <Card.Img
                      src={Image3}
                      style={{
                        borderEndEndRadius: "30",
                        height: "190px",
                        width: "190px",
                      }}
                    />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={10}>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <strong> Code Switch </strong>{" "}
                  </p>
                </Col>
                <Col ms={2}></Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p style={{ textAlign: "center" }}>
                    What's CODE SWITCH? It's the fearless conversations …
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <a href="">
                    <Card.Img
                      src={Image4}
                      style={{
                        borderEndEndRadius: "30",
                        height: "190px",
                        width: "190px",
                      }}
                    />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={11}>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <strong> Crime Junkie </strong>{" "}
                  </p>
                </Col>
                <Col ms={1}></Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p style={{ textAlign: "center" }}>
                    Crime Junkie is a weekly podcast dedicated to giving…
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col md={12}>
              <p style={{ textAlign: "right", fontSize: "20px" }}>
                <ins> View All Popular Podcasts </ins>{" "}
                <FontAwesome
                  className="super-crazy-colors"
                  name="rocket"
                  size="2x"
                  spin
                  style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col md={10} style={{ textAlign: "left" }}>
              <h4>
                <strong> Featured Podcasts</strong>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <a href="">
                    <Card.Img
                      src={Image2}
                      style={{
                        borderEndEndRadius: "30",
                        height: "190px",
                        width: "190px",
                      }}
                    />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={10}>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <strong> Stuff You Should Know</strong>{" "}
                  </p>
                </Col>
                <Col ms={2}></Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p style={{ textAlign: "center" }}>
                    If you've ever wanted to know
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <a href="">
                    <Card.Img
                      src={Image3}
                      style={{
                        borderEndEndRadius: "30",
                        height: "190px",
                        width: "190px",
                      }}
                    />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={10}>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <strong> Code Switch </strong>{" "}
                  </p>
                </Col>
                <Col ms={2}></Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p style={{ textAlign: "center" }}>
                    What's CODE SWITCH? It's the fearless conversations …
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <a href="">
                    <Card.Img
                      src={Image4}
                      style={{
                        borderEndEndRadius: "30",
                        height: "190px",
                        width: "190px",
                      }}
                    />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={11}>
                  <p style={{ textAlign: "center" }}>
                    {" "}
                    <strong> Crime Junkie </strong>{" "}
                  </p>
                </Col>
                <Col ms={1}></Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p style={{ textAlign: "center" }}>
                    Crime Junkie is a weekly podcast dedicated to giving…
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={3}></Col>
        <Col md={6}>
          <Row>
            <Col md={12}>
              <p style={{ textAlign: "right", fontSize: "20px" }}>
                <ins> View All Featured Podcasts</ins>
                <FontAwesome
                  className="super-crazy-colors"
                  name="rocket"
                  size="2x"
                  spin
                  style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MainContain;
