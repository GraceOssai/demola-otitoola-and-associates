import React, { useState } from "react";
import Image from "next/image";
import paperPlane from "../../public/assets/svg/paperPlane.svg";
import Input from "../globalComponents/Input";
import Button from "../globalComponents/Button";
import logo from "../../public/assets/images/logo.png";


const Footer = () => {
  const [emailStateSub, setEmailStateSub] = useState('');
  const [emailErrorSub, setEmailErrorSub] = useState('')

  const emailPatterns = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailChangeHandlerSub = (event) => {
    setEmailStateSub(event.target.value)
  };
  


  const emailSubscribeHandler = (event) => {
    event.preventDefault("");

    let isEmailSubValid = true;

    if (emailStateSub.trim() === "") {
      setEmailErrorSub("email is required");
      isEmailSubValid = false;
      return
    } else if (!emailPatterns.test(emailStateSub)) {
      setEmailErrorSub('Invalid email')
      isEmailSubValid = false;
      return
    } else setEmailErrorSub("");

    console.log(emailStateSub)

    // if (emailValidationSub) {
    //   const userEmail = {
    //     email: emailStateSub,
    //   };

    //  
    // }

    setEmailStateSub('')
  };
 
  return (
    <div className="bg-primary-0 mt-[100px] w-full">
      <div className="w-full bg-secondary-0 py-10">
        <div className="flex justify-center gap-6 items-center px-5 md:flex-row">
          <div className="w-[100px] h-[100px] md:w-[217px] md:h-[217px]">
            <Image
              src={paperPlane}
              alt={"planePaper"}
              width={217}
              height={217}
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-6 px-3">
            <div className="w-full">
              <h1 className="text-[#141B2D] font-bold text-sm md:text-2xl">
                Subscribe to newsletter
              </h1>
              <p className="text-sm md:text-xl ">
                Get the latest news and interesting offers in real estate
              </p>
            </div>
          </div>
        </div>
        <form
          className="flex flex-col gap-3 max-w-[30rem] mx-auto px-5 mt-5 md:mt-0 md:flex-row md:w-full md:justify-center"
          onSubmit={emailSubscribeHandler}
        >
          <Input
            type="email"
            onChange={emailChangeHandlerSub}
            placeholder="Your e-mail address"
            value={emailStateSub}
            className="w-[100%] h-[48px]"
          />
          <Button
            newStyle="text-primary-0 border-[1px] border-primary-0 h-[48px] px-3 mb-6 md:mb-0"
            onClickBtn={emailSubscribeHandler}
          >
            Subscribe
          </Button>
          {emailErrorSub && <div className="text-red-500">{emailErrorSub}</div>}
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={logo} alt={"logo"} width={120} height={63} />
        <p className="text-white">Real Estate</p>
      </div>
    </div>
  );
};

export default Footer;
