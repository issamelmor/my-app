import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { useEffect } from "react";
import React, { useState, lazy } from "react";
import OtpInput from 'react-otp-input';
import VerificationInput from "react-verification-input";
import LoginBlock from "../../components/Login";





const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

export default function Login() {
 const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);


  return (
   <Container>
    <ScrollToTop />
    {/* <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
<VerificationInput
  classNames={{
    container: "container",
    character: "character",
    characterInactive: "character--inactive",
    characterSelected: "character--selected",
  }}
/> */}
{ <LoginBlock
   value = {otp}
   valueLength = {6}
   onChange = {onChange}
   /> }
    </Container>
  );
}


