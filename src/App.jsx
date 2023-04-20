import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logData } from "./redux/actions/appAction";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import FormLogin from "./pages/FormLogin";
import { AnimatePresence } from "framer-motion";
import ForgotPassword from "./components/Login/ForgotPassword";

function App() {
  // const [data, setdata] = useState({});
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(logData());
  // }, []);
  // const sel = useSelector((state) => state);
  // useEffect(() => {
  //   setdata(sel);
  //   console.log(data);
  // }, [data]);
  return (
    <>
      <AnimatePresence>
        <Routes>
          {/* <Route path="/" element={<DashBoard />} /> */}
          <Route path="/" element={<FormLogin />} />
          {/* <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} /> */}
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
