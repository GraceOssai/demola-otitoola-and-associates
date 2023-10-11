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
    <div className="bg-[#1C3988] mt-[100px]">
      <div className="w-full bg-[#F3F3FA]">
        <div className="flex justify-center gap-6 items-center py-[15px] px-14">
          <Image src={paperPlane} alt={"planePaper"} width={217} height={217} />
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-[#141B2D] font-bold text-2xl">
                Subscribe to newsletter
              </h1>
              <p className="text-xl">
                Get the latest news and interesting offers and real estate
              </p>
            </div>
            <form
              className="flex items-center gap-3"
              onSubmit={emailSubscribeHandler}
            >
              <Input
                type="email"
                onChange={emailChangeHandlerSub}
                placeholder="Your e-mail address"
                value={emailStateSub}
              />
              <Button
                newStyle="text-[#1C3988] border-[1px] border-[#1C3988] px-6 h-[48px]"
                onClickBtn={emailSubscribeHandler}
              >
                Subscribe
              </Button>
              {emailErrorSub && <div className="text-red-500">{emailErrorSub}</div>}
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={logo} alt={"logo"} width={120} height={63} />
        <p className="text-white">Real Estate</p>
      </div>
    </div>
  );
};

export default Footer;
