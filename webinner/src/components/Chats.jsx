import React from "react";
import ChatSerchInput from "./ChatSerchInput";
import Col from "react-bootstrap/Col";
import UsersFlex from "./UsersFlex";

const Chats = () => {
  return (
    <div className="ChatsSection">
      <Col md={9}>
        <ChatSerchInput />
      </Col>
      <Col md={2}>
        <div className="walter-white">
          <UsersFlex/>
        </div>
      </Col>
    </div>
  );
};

export default Chats;
