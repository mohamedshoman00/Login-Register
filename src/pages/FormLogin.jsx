import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import SignUp from "../components/Login/SignUp";
import Panel from "../components/Login/Panel";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../redux/actions/appAction";
import background1 from "../assets/images/background1.jpg";
import LeftPanel from "../components/Login/LeftPanel";
import RightPanel from "../components/Login/RightPanel";
import Login from "../components/Login/Login";
const FormLogin = () => {
  // const islogin = useSelector((state) => state.loginOrRegister);
  return (
    <>
      <Container
        fluid
        className="d-flex gap-lg-4"
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          // backgroundColor: "#fff",
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
        <Col className={`col-lg-6 small-hidden`}>
          <Panel />
          {/* <LeftPanel /> */}
          {/* <RightPanel /> */}
        </Col>
        {/* {islogin ? <Login islogin={islogin} /> : <SignUp islogin={islogin} />} */}
        <Login />
        <SignUp />
      </Container>
    </>
  );
};

export default FormLogin;
