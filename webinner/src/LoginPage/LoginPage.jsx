import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import logo from "../images/logo.png";

const LoginPage = () => {
  const [inputone, setInputone] = useState("");
  const handleChange = (e) => {
    setInputone(e.target.value);
    console.log(inputone);
  };
  const [inputsecond, setInputsecond] = useState("");
  const handleChangeSecond = (e) => {
    setInputsecond(e.target.value);
    console.log(inputsecond);
  };
  var kontrol = () => {
    if (inputone === "" && inputsecond === "") {
      document.getElementById("uyarı").style = "display: block";
    } else {
      console.log("Lütfen boş alanları doldurunuz");
    }
  };
  return (
    <div>
      <Row>
        <Col md={8}>
          <div className="pagesLogo">
            <img src={logo} alt="" />
            <h5>Giriş Yapınız</h5>
            <div className="UserInputSection">
              <input
                type="text"
                placeholder="Ad Soyad"
                onChange={handleChange}
                value={inputone}
              />
              <input    
                type="email"
                placeholder="E-Posta"
                onChange={handleChangeSecond}
                value={inputsecond}
              />
            </div>
            <button onClick={kontrol} type="submit">
              Giriş Yap
            </button>
            <span style={{ display: "none" }} id="uyarı">
              Lütfen boş alanları doldurunuz.{" "}
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
