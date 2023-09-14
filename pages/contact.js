import React, { useState } from "react";
import Layout from "@/components/Layouts/Layout";
import Input from "@/components/globalComponents/Input";
import Button from "@/components/globalComponents/Button";

const contact = () => {
  const [fullNameState, setFullName] = useState("");
  const [phoneNumberState, setPhoneNumber] = useState('');
  const [emailState, setEmail] = useState("");
  const [textAreaMsg, setTextAreaMsg] = useState("");
  const [checkBoxInput, setCheckBoxInput] = useState(false);

  const [fullnameError, setFullnameError] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [textAreaMsgError, setTextAreaMsgError] = useState('')
  const [checkBoxInputError, setCheckBoxInputError] = useState('')

  // full name
  const fullNameHandler = (event) => {
    setFullName(event.target.value);
  };
  // phone number
  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  // email state
  const emailStateHandler = (event) => {
    setEmail(event.target.value);
  };

  // text area
  const textAreaMsgHandler = (event) => {
    setTextAreaMsg(event.target.value);
  };


  const checkBoxInputHandler = (event) => {
    setCheckBoxInput(event.target.checked);
  };

  const formValidation = () => {
    
    let isFullnameValid = true;
    let isPhoneValid = true;
    let isEmailValid = true;
    let isMessageValid = true;
    let isCheckedValid = true;

    if (fullname.trim() === "") {
      setFullnameError("Email is required");
      isFullnameValid = false;
    } else setFullnameError("");


    if (phoneNumberState.trim() === "") {
      setPhoneNumberError("Phone number is required");
      isPhoneValid = false;
    } else setPhoneNumberError("");


    if (emailState.trim() === "") {
      setEmailError("Email is required");
      isEmailValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
      isEmailValid = false;
    } else setEmailError("");


    if (textAreaMsg.trim() === "") {
      setTextAreaMsgError("Message is required");
      isMessageValid = false;
    } else setTextAreaMsgError("");


    // if (checkBoxInput.trim() === "") {
    //   setFullnameError = "Email is required";
    //   isFullnameValid = false;
    // } else setFullnameError("");
  }


  const submitHandler = (event) => {
    event.preventDefault();

    console.log('clicked')
    console.log(checkBoxInput)
    const userData = {
      fullName: fullNameState,
      phoneNumber: phoneNumberState,
      email: emailState,
      textArea: textAreaMsg,
      checked : checkBoxInput
    }

    console.log(userData);

    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setTextAreaMsg('');
    setCheckBoxInput(false)

  }

  return (
    <Layout>
      <form
        action=""
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center gap-6 mt-[80px]"
      >
        <Input
          onChange={fullNameHandler}
          value={fullNameState}
          placeholder="Fullname..."
          className="w-[500px] h-[40px] rounded"
        />
        <Input
          onChange={phoneNumberHandler}
          value={phoneNumberState}
          placeholder="Phone number..."
          className="w-[500px] h-[40px] rounded"
        />
        <Input
          onChange={emailStateHandler}
          value={emailState}
          placeholder="email..."
          className="w-[500px] h-[40px] rounded"
        />
        <textarea
          id="myTextarea"
          name="textarea_name"
          onChange={textAreaMsgHandler}
          className="w-[500px] h-[200px] border-2 p-[20px] outline-none"
          defaultValue='Enter text here...'
        />
        <Input
          onChange={checkBoxInputHandler}
          checked={checkBoxInput}
          type="checkBox"
          className="w-[50px] h-[15px] rounded"
        />
        <span>I agree to the processing of data</span>
        <Button onClickBtn={submitHandler}>Send Message</Button>
      </form>
    </Layout>
  );
};

export default contact;
