import React from "react";
import "./App.css";
import Context from "./FormContext/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormStep1 from "./Components/FormStep1";
import FormStep2 from "./Components/FormStep2";
import FormDataStep3 from "./Components/FormDataStep3";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  return (
    <div className="app">
      <Context>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<FormStep1 />} />
          <Route path="/page2" element={<FormStep2 />} />
          <Route path="/data" element={<FormDataStep3 />} />
        </Routes>
      </Context>
    </div>
  );
};

export default App;
