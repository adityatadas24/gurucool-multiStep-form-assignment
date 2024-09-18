import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProviderContext } from "../FormContext/Context";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const FormStep1 = () => {
  const { formInput, handleChange } = useContext(FormProviderContext);
  const [errors, setErrors] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function GoToNext() {
    if (
      formInput.name !== "" ||
      formInput.email !== "" ||
      formInput.phone !== ""
    ) {
      if (formInput.name !== "") {
        if (formInput.email !== "") {
          if (formInput.phone !== "") {
            if (formInput.phone.length === 10) {
              if (emailRegex.test(formInput.email)) {
                navigate("/page2");
                setErrors("");
              } else {
                toast.error("Please enter a valid email address");
              }
            } else {
              toast.error("Phone number must be 10 digits");
            }
          } else {
            setErrors("Phone number is required");
          }
        } else {
          setErrors("email value is required");
        }
      } else {
        setErrors("name value is required");
      }
    } else {
      toast.error("All fields value are required");
    }
  }

  useEffect(() => {
    const disabledbtn =
      formInput.phone.trim() !== "" &&
      formInput.name.trim() !== "" &&
      formInput.email.trim() !== "";
    setDisabled(disabledbtn);
  }, [formInput]);

  return (
    <div className="form">
      <h1 className="text-center">Multi-Step Form</h1>
      <Form className="d-flex flex-column align-items-center justify-content-center">
        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-5">Name</Form.Label>
          <Form.Control
            className="border border-secondary rounded-sm"
            style={{ height: "40px" }}
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formInput.name}
            onChange={handleChange}
          />
          {errors && (
            <p className={formInput.name !== "" ? "d-none" : "text-danger"}>
              {errors}
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-5">Email</Form.Label>
          <Form.Control
            style={{ height: "40px" }}
            className="border border-secondary rounded-sm"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formInput.email}
            onChange={handleChange}
          />
          {errors && (
            <p className={formInput.email !== "" ? "d-none" : "text-danger"}>
              {errors}
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-8 col-lg-8">
          <Form.Label className="fs-4 fw-5">Phone</Form.Label>
          <Form.Control
            style={{ height: "40px" }}
            className="border border-secondary rounded-sm "
            type="number"
            name="phone"
            placeholder="Enter your phone no."
            value={formInput.phone}
            onChange={handleChange}
          />
          {errors && (
            <p className={formInput.phone !== "" ? "d-none" : "text-danger"}>
              {errors}
            </p>
          )}
        </Form.Group>

        <div className="d-flex justify-content-between mt-3 gap-4">
          <Button
            style={{ width: "15vw", height: "40px", cursor: "pointer" }}
            variant="info"
            onClick={GoToNext}
            disabled={!disabled}
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormStep1;
