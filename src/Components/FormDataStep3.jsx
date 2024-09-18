import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProviderContext } from "../FormContext/Context";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const FormAllData = () => {
  const { formInput,handleData } = useContext(FormProviderContext);
  const navigate = useNavigate();

  const GoToPrev = () => {
    navigate("/page2");
   
  };

  function handleSubmit (e){
    e.preventDefault();
    setTimeout(()=>{
      handleData()
      navigate('/')
    },1500)
    toast.success('Submmited Successfully')
    toast.success('submit all data in localStorage')
  }

  return (
    <div className="form">
        <h1 className="text-center">Multi-Step Form</h1>
      <div className="container">
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>Name:</span>{" "}
            {formInput.name}
          </p>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>Email:</span>{" "}
            {formInput.email}
          </p>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>Phone:</span>{" "}
            {formInput.phone}
          </p>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              Address Line 1:
            </span>{" "}
            {formInput.addressLine1}
          </p>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              Address Line 2:
            </span>{" "}
            {formInput.addressLine2}
          </p>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>City:</span>{" "}
            {formInput.city}
          </p>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>State:</span>{" "}
            {formInput.state}
          </p>
          <p>
            <span style={{ fontWeight: "bold", fontSize: "18px" }}>
              Pincode:
            </span>{" "}
            {formInput.pincode}
          </p>
        </div>

      
        <div className="container d-flex justify-content-between mt-3 gap-4">
          <Button
            style={{ width: "15vw", height: "40px" }}
            variant="secondary"
            onClick={GoToPrev}
          >
            Prev
          </Button>

          <Button
            style={{ width: "15vw", height: "40px" }}
            variant="success"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
    </div>
  );
};

export default FormAllData;
