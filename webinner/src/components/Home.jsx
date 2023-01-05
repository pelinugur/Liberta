import React from "react";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VideoMeeting from "./VideoMeeting";
import Chat from "./Chat";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Col>

        <Col md={9}>
            <VideoMeeting/>
        </Col>

        <Col md={3}>
            <Chat/>
        </Col>
        <Footer/>
      </Row>
     
    </Container>

    //
  );
};

export default Home;
