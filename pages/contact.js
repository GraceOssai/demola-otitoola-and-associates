import React, { useState } from "react";
import Layout from "@/components/Layouts/Layout";
import Input from "@/components/globalComponents/Input";
import Button from "@/components/globalComponents/Button";

const contact = () => {
  const [fullNameState, setFullName] = useState("");
  const [phoneNumberState, setPhoneNumber] = useState();
  const [emailState, setEmail] = useState("");
  const [textAreaMsg, setTextAreaMsg] = useState("");
  const [checkBoxInput, setCheckBoxInput] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false)

  // full name
  const fullNameHandler = (event) => {
    setFullName(event.target.value);

    setFormIsValid(event.target.value.length > 10)
  };
  // phone number
  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);

    setFormIsValid(event.target.value.includes('+').length === 14)
  };

  // email state
  const emailStateHandler = (event) => {
    setEmail(event.target.value);

    setFormIsValid(event.target.value.includes("@"));
  };

  // text area
  const textAreaMsgHandler = (event) => {
    setTextAreaMsg(event.target.value);

    setFormIsValid(event.target.value)
  };
  const checkBoxInputHandler = (event) => {
    setCheckBoxInput(event.target.checked);

    setFormIsValid(event.target.checked ? true : false)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      fullName: fullNameState,
      phoneNumber: phoneNumberState,
      email: emailState,
      textArea: textAreaMsg,
      checked : checkBoxInput
    }

    console.log(userData);

    setFullName('');
    setPhoneNumber();
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
          placeholder="fullname..."
          className="w-[500px] h-[40px] rounded"
        />
        <Input
          onChange={phoneNumberHandler}
          value={phoneNumberState}
          placeholder="phone number..."
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
          onChange={textAreaMsg}
          className="w-[500px] h-[400px] border-2"
        >
          Enter text here...
        </textarea>
        <Input
          onChange={checkBoxInputHandler}
          checked={checkBoxInput}
          type="checkBox"
          className="w-[500px] h-[40px] rounded"
        />
        <Button disabled={!formIsValid}>Send Message</Button>
      </form>
    </Layout>
  );
};

export default contact;
