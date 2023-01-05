import {useState} from 'react'
import Col from 'react-bootstrap/esm/Col'
import { FiSend } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";

const ChatTypeing = ({mesaj}) => {
    

    const [message, setMessage] = useState("");
    const [updated, setUpdated] = useState(message);
    const handleChange = e =>{
        setMessage(e.target.value);        
    }
    const handleClick = () => {
        setUpdated(message);
      };

    console.log(updated)
     mesaj = message;
    
     
  return (
    <div className='ChatTypeingSection'>
        <Col md={10} >
            <div className="typing">
            <input ttype="text" id="message" name="message" onChange={handleChange}value={message} placeholder='Mesaj yazınız...' />
            <FiSend onClick={handleClick} style={{marginRight: "10px", cursor: "pointer", color:"#324d7f", fontWeight:"800"}} />
            <AiOutlinePlusCircle style={{marginRight: "10px", cursor: "pointer", color:"#324d7f", fontWeight:"800"}}/>
            </div>
        </Col>
       
    </div>
  )
}

export default ChatTypeing