import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ChatNav from "./ChatNav";
import Chats from "./Chats";
import ChatTypeing from "./ChatTypeing";

const Chat = () => {
  return (
    <div className="chat-section">
      <Container>
        <Row>
          <Col md={12}>
            {/* burası chat kısmının navbar bölümü... <ChatNav/>*/}
            <ChatNav />
            
            {/* burası chatin döndüğü bölüm <Chats/> */}
            <Chats />
            <ChatTypeing mesaj ="PELİN"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Chat;
