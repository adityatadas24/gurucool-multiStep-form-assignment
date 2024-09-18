import React, { createContext, useEffect, useState } from "react";


export const FormProviderContext = createContext();

const Context = (props) => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [formData, setFormData] = useState([]);


  function handleData() {
    if (formData.indexOf(formInput) >= 0) {
              return;
            }

    const dataValue = [...formData, formInput]


      setFormData(dataValue);
      setFormInput({ name: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pincode: "",
      })

    
      localStorage.setItem("formdata", JSON.stringify(dataValue))

  
  }

  useEffect(() => {
    const savedInputData = localStorage.getItem('formInput');
    if (savedInputData) {
      setFormInput(JSON.parse(savedInputData)); 
    }

    const savedData = localStorage.getItem('formdata');
    if (savedData) {
      setFormData(JSON.parse(savedData)); 
    }

  }, []);


  function handleChange(e) {
    const { name, value } = e.target;
    const updatedFormInput = { ...formInput, [name]: value };
    setFormInput(updatedFormInput);

  
    localStorage.setItem('formInput', JSON.stringify(updatedFormInput));
  }
  const allDatas = {
    formInput,
    setFormInput,
    setFormData,
    formData,
    handleChange,
    handleData,
  };
  return (
    <FormProviderContext.Provider value={allDatas}>
      {props.children}
    </FormProviderContext.Provider>
  );
};

export default Context;
