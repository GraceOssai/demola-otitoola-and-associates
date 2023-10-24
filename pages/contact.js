import React, { useState } from "react";
import Layout from "@/components/Layouts/Layout";
import Input from "@/components/globalComponents/Input";
import Button from "@/components/globalComponents/Button";
import Head from "next/head";

const contact = () => {
  const [fullNameState, setFullName] = useState("");
  const [phoneNumberState, setPhoneNumber] = useState("");
  const [emailState, setEmail] = useState("");
  const [textAreaMsg, setTextAreaMsg] = useState("");
  const [checkBoxInput, setCheckBoxInput] = useState(false);

  const [fullnameError, setFullnameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textAreaMsgError, setTextAreaMsgError] = useState("");
  const [checkBoxInputError, setCheckBoxInputError] = useState("");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (fullNameState.trim() === "") {
      setFullnameError("Full name is required");
      isFullnameValid = false;
    } else setFullnameError("");

    if (phoneNumberState.trim() === "") {
      setPhoneNumberError("Phone number is required");
      isPhoneValid = false;
    } else setPhoneNumberError("");

    if (emailState.trim() === "") {
      setEmailError("Email is required");
      isEmailValid = false;
    } else if (!emailPattern.test(emailState)) {
      setEmailError("Invalid email address");
      isEmailValid = false;
    } else setEmailError("");

    if (textAreaMsg.trim() === "") {
      setTextAreaMsgError("Message is required");
      isMessageValid = false;
    } else setTextAreaMsgError("");

    if (checkBoxInput === false) {
      setCheckBoxInputError("must be checked");
      isCheckedValid = false;
    } else setCheckBoxInputError("");

    const isValid =
      isFullnameValid &&
      isPhoneValid &&
      isEmailValid &&
      isMessageValid &&
      isCheckedValid;
    
    return isValid;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValidation()) {
      console.log("clicked");
      console.log(checkBoxInput);
      
      const userData = {
        fullName: fullNameState,
        phoneNumber: phoneNumberState,
        email: emailState,
        textArea: textAreaMsg,
        checked: checkBoxInput,
      };

      console.log(userData);

      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setTextAreaMsg("");
      setCheckBoxInput(false);
    }
  };

  return (
    <>
      <Head>
        <title>Demola Otitoola & Associates - Contact.</title>
        <meta
          name="description"
          content="We provide a wide range of services within the field of Estate Management and Development in both Rural and Urban areas."
        />
        <meta
          property="og:title"
          content="Demola Otitoola & Associates - Exceptional Real Estate Services"
        />
        <meta
          property="og:description"
          content="We provide a wide range of services within the field of Estate Management and Development in both Rural and Urban areas."
        />
        <meta
          property="og:image"
          content="/janet-hospital-images/logo/janet-memorial-hospital-logo.png"
        />
        <meta property="og:url" content="https://janetmemorialhospital.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className="border h-[100vh] w-full mt-[60px] bg-[url('../public/assets/images/mainAbout.png')] bg-cover bg-center object-cover">
          <div className="w-full h-full pt-[25px] flex flex-col justify-center gap-[7px] items-center text-secondary-0 bg-primary-2">
            <form
              action=""
              onSubmit={submitHandler}
              className="flex flex-col justify-center items-center gap-6 max-w-[40rem] mx-auto mt-[150px] md:mt-0"
            >
              <Input
                onChange={fullNameHandler}
                value={fullNameState}
                placeholder="Fullname..."
                className="w-full h-[40px] rounded"
              />
              {fullnameError && (
                <div className="text-red-500">{fullnameError}</div>
              )}
              <Input
                onChange={phoneNumberHandler}
                value={phoneNumberState}
                placeholder="Phone number..."
                className="w-full h-[40px] rounded"
              />
              {phoneNumberError && (
                <div className="text-red-500">{phoneNumberError}</div>
              )}
              <Input
                onChange={emailStateHandler}
                value={emailState}
                placeholder="email..."
                className="w-full h-[40px] rounded"
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
              <textarea
                id="myTextarea"
                name="textarea_name"
                onChange={textAreaMsgHandler}
                className="w-full h-[200px] border-2 p-[20px] outline-none"
                defaultValue="Enter text here..."
              />
              {textAreaMsgError && (
                <div style={{ color: "red" }}>{textAreaMsgError}</div>
              )}

              <div className="flex">
                <Input
                  onChange={checkBoxInputHandler}
                  checked={checkBoxInput}
                  type="checkBox"
                  className="w-[50px] h-[15px] rounded"
                />
                {checkBoxInputError && (
                  <div style={{ color: "red" }}>{checkBoxInputError}</div>
                )}
                <span className="text-secondary-0 font-bold">
                  I agree to the processing of data
                </span>
              </div>
              <Button onClickBtn={submitHandler}>Send Message</Button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
