import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import Image2 from "../image/StuffYouShouldKnow.jpg";
import Image3 from "../image/codeswitch.jpg";
import Image4 from "../image/crimejunkie.png";
import FontAwesome from "react-fontawesome";
import DetailView from "./DetailView";
import MainContainStyle from "./CustomStyle/MainContainStyle.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  // const [show, setShow] = useState(false);
  // let showValue = "";
  // let mainValue = (
  //   <button onClick={() => setShow(true)}>
  //     <Card.Img
  //       src={Image2}
  //       style={{
  //         borderEndEndRadius: "30",
  //         height: "190px",
  //         width: "190px",
  //       }}
  //     />
  //   </button>
  // );
  // if (show) {
  //   showValue = <DetailView />;
  //   mainValue = "";
  // }
  // const changeShowDetails = (e) => {
  //   e.preventDefault();
  //   setShow(true);
  //   console.log("clicked on fxn");
  //   console.log("show>>", show);
  //   if (!show) {
  //     showValue = <DetailView />;
  //   }
  // };
  function DetailView() {
    console.log("okkkkkkkkkkkkkkkkkkkkkkk");
  }

  // function About() {
  //   return (
  //     <div>
  //       <h2>About</h2>
  //     </div>
  //   );
  // }

  // function Dashboard() {
  //   return (
  //     <div>
  //       <h2>Dashboard</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="mainContainer">
      <Row className="cardHolder">
        <Col md={8}>
          <Row>
            <div>
              <h2>
                <strong> Stream Top Podcasts </strong>
              </h2>
            </div>
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
      <Row className="cardHolder">
        <div>
          <h4>
            <strong> Popular Podcasts</strong>{" "}
          </h4>
        </div>
      </Row>
      <Row className="cardHolder">
        <Col md={8}>
          <Row>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <div>
                    {/* <button onClick={() => setShow(true)}>
                      <Card.Img
                        src={Image2}
                        style={{
                          borderEndEndRadius: "30",
                          height: "190px",
                          width: "190px",
                        }}
                      />
                    </button> */}
                    {/* {showValue} */}
                    {/* <Router>
                      <div>
                        <ul>
                          <li>
                            <Link to="detailView">Home</Link>
                          </li>
                        </ul>

                        <hr />

                        <Switch>
                          <Route path="/dashboard">
                            <DetailView />
                          </Route>
                        </Switch>
                      </div>
                    </Router> */}

                    <a href="">
                      <Card.Img className="cardImageStyle" src={Image2} />
                    </a>
                  </div>
                </Col>
              </Row>
              <Row className="cardHolder">
                <Col md={10}>
                  <p style={{ textAlign: "center" }}>
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
                    <Card.Img className="cardImageStyle" src={Image3} />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={10}>
                  <p style={{ textAlign: "center" }}>
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
                    <Card.Img className="cardImageStyle" src={Image4} />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={11}>
                  <p style={{ textAlign: "center" }}>
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
      <Row className="cardHolder">
        <Col md={6}>
          <Row style={{ textAlign: "right", fontSize: "17px" }}>
            <p>
              <ins> View All Popular Podcasts </ins>{" "}
              <FontAwesome
                className="super-crazy-colors"
                name="rocket"
                size="2x"
                spin
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </p>
          </Row>
        </Col>
      </Row>
      <Row className="cardHolder">
        <Col md={8}>
          <Row>
            <Col md={10} style={{ textAlign: "left" }}>
              <h4>
                <strong> Featured Podcasts</strong>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="cardHolder">
        <Col md={8}>
          <Row>
            <Col>
              <Row style={{ backgroundColor: "#F6F8F9" }}>
                <Col md={10}>
                  <a href="">
                    <Card.Img className="cardImageStyle" src={Image2} />
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
                    <Card.Img className="cardImageStyle" src={Image3} />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={10}>
                  <p style={{ textAlign: "center" }}>
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
                    <Card.Img className="cardImageStyle" src={Image4} />
                  </a>
                </Col>
              </Row>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={11}>
                  <p style={{ textAlign: "center" }}>
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
      <Row>
        <Col md={6}>
          <Row>
            <p style={{ textAlign: "right", fontSize: "17px" }}>
              <ins> View All Featured Podcasts</ins>
              <FontAwesome
                className="super-crazy-colors"
                name="rocket"
                size="2x"
                spin
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MainContain;
