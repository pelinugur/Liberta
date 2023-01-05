import React from "react";
import Col from "react-bootstrap/esm/Col";
import { FaUser } from "react-icons/fa";

const ChatNav = () => {
  return (
    <div className="ChatNavSection">
      <Col md={9}>
        <div className="ChatNavTitle">
          <p>Sohbet</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="ChatNavTitleIcon">
          <FaUser />
        </div>
      </Col>
    </div>
  );
};

export default ChatNav;
