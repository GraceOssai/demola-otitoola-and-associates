import React, { useReducer } from "react";
import Image from "next/image";
import paperPlane from "../../public/assets/svg/paperPlane.svg";
import Input from "../globalComponents/Input";
import Button from "../globalComponents/Button";
import logo from "../../public/assets/images/logo.png";


const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value : action.val, isValid : action.val.includes('@')}
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: '', isValid : false}
}

const Footer = () => {
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    dispatchEmailState({type : 'USER_INPUT',  val : event.target.value})
  };
  
  const validateBlurHandler = () => {
    dispatchEmailState({type : 'INPUT_BLUR'})
  };

  const subScribeHandler = (event) => {
    event.preventDefault();
    
    dispatchEmailState({ type: "USER_INPUT", val: "" });
     console.log(emailState.value);
   };
  
  const emailSubmitHandler = () => {}
 
  return (
    <div className="bg-[#1C3988]">
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
            <form className="flex items-center gap-3" onSubmit={emailSubmitHandler}>
              <Input
                type="email"
                onChange={emailChangeHandler}
                onBlur={validateBlurHandler}
                placeholder="Your e-mail address"
                value={emailState.value}
              />
              <Button
                newStyle="text-[#1C3988] border-[1px] border-[#1C3988] px-6 h-[48px] "
                onClickBtn={subScribeHandler}
              >
                Subscribe
              </Button>
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
