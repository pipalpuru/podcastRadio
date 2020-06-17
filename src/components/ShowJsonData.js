import React, { Component } from "react";
import Data from "../components/data.json";
import ReactAudioPlayer from "react-audio-player";
import Image from "../image/radio.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

class ShowJsonData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setState({
      items: Data.results,
    });
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <h1>Radio Online Nepal (RON)</h1>
        <Row>
          {items.length > 0 &&
            items.map((item) => {
              return (
                <Col
                  md={4}
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                      <Card.Text>
                        <Table responsive style={{ border: "1px" }}>
                          <tbody>
                            <tr>
                              <td>Radio Name: {item.radio_name}</td>
                            </tr>
                            <tr>
                              <td>Title Song: {item.title_song}</td>
                            </tr>
                            <tr>
                              <td>Artist Song: {item.artist_song}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <div>
                          <ReactAudioPlayer
                            style={{ width: "255px" }}
                            src={item.radio_stream}
                            controls
                          />
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default ShowJsonData;
