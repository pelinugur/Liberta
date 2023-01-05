import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const ChatSerchInput = () => {
  return (
    <div className="ChatSerchInput">
      <input type="text" placeholder="Search..." />
      <AiOutlineSearch style={{ marginRight: "10px", cursor: "pointer" }} />
    </div>
  );
};

export default ChatSerchInput;
