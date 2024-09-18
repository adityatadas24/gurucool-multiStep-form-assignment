import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProviderContext } from "../FormContext/Context";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const FormPage2 = () => {
  const { formInput, handleChange,} =
    useContext(FormProviderContext);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const [disabled , setDisabled] = useState(true)

  function GoToNext() {
    if (
      formInput.addressLine1 !== "" ||
      formInput.addressLine2 !== "" ||
      formInput.city !== "" ||
      formInput.state !== "" ||
      formInput.pincode !== ""
    ) {
      if (formInput.addressLine1 !== "") {
        if (formInput.addressLine2 !== "") {
          if (formInput.city !== "") {
            if (formInput.state !== "") {
              if (formInput.pincode !== "") {
                navigate("/data");
               
                setErrors("");
              } else {
                setErrors("pincode is required");
              }
            } else {
              setErrors("state value is required");
            }
          } else {
            setErrors("city value is required");
          }
        } else {
          setErrors("Address line 2 is required");
        }
      } else {
        setErrors("Address line 1 is required");
      }
    } else {
      toast.error("All fields value are required");
    }
  }

  const gotoprev = () => navigate("/");

  // useEffect(() => {
  //   const disabledbtn =
  //   formInput.addressLine1.trim() !== "" &&
  //   formInput.addressLine2.trim() !== "" &&
  //   formInput.city.trim() !== ""&&
  //   formInput.state.trim() !== "" &&
  //   formInput.pincode.trim() !== "";
  // setDisabled(disabledbtn)
  // }, [formInput])

  return (
    <div className="form">
        <h1 className="text-center">Multi-Step Form</h1>
      <Form className="d-flex flex-column align-items-center justify-content-center  ">
        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-5">Address Line 1</Form.Label>
          <Form.Control
            className="border border-secondary rounded-sm"
          
            style={{ height: "40px" }}
            type="address"
            name="addressLine1"
            placeholder="Address Line 1"
            value={formInput.addressLine1}
            onChange={handleChange}
          />

          {errors && (
            <p
              className={
                formInput.addressLine1 !== "" ? "d-none" : "text-danger"
              }
            >
              {errors}
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-3">Address Line 2</Form.Label>
          <Form.Control
            className="border border-secondary rounded-sm "
            style={{ height: "40px" }}
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
            value={formInput.addressLine2}
            onChange={handleChange}
          />
          {errors && (
            <p
              className={
                formInput.addressLine2 !== "" ? "d-none" : "text-danger"
              }
            >
              {errors}
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-5">City</Form.Label>
          <Form.Control
            className="border border-secondary rounded-sm"
            style={{ height: "40px" }}
            type="text"
            name="city"
            placeholder="City"
            value={formInput.city}
            onChange={handleChange}
          />
          {errors && (
            <p className={formInput.city !== "" ? "d-none" : "text-danger"}>
              {errors}
            </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-5">State</Form.Label>
          <Form.Control
            className="border border-secondary rounded-sm"
            style={{ height: "40px" }}
            type="text"
            name="state"
            placeholder="State"
            value={formInput.state}
            onChange={handleChange}
          />
          {errors && (
            <p className={formInput.state !== "" ? "d-none" : "text-danger"}>
              {errors}
            </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-5">Pincode</Form.Label>
          <Form.Control
            className="border border-secondary rounded-sm"
            style={{ height: "40px" }}
            type="number"
            name="pincode"
            placeholder="Pincode"
            value={formInput.pincode}
            onChange={handleChange}
          />
          {errors && (
            <p className={formInput.pincode !== "" ? "d-none" : "text-danger"}>
              {errors}
            </p>
          )}
        </Form.Group>
        <div className="d-flex justify-content-between mt-3 gap-4">
          <Button
            style={{ width: "15vw", height: "40px" }}
            variant="secondary"
            onClick={gotoprev}
          >
            Prev
          </Button>

          <Button
            style={{ width: "15vw", height: "40px" }}
            variant="info"
            onClick={GoToNext}
           
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormPage2;
