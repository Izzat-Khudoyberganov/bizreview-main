import React from "react";
import Container from "../../Layout/Container";
import FormWraper from "./FormWraper";
import SignUpButtons from "./SignUpButtons";
import {AlternativeElement, Info, SignUpSubtitle, SignUpText, SignUpTitle, SignUpWraper } from "./style";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <Container>
      <SignUpWraper>
        <SignUpTitle>
          Sign Up for <span>bizreview</span>
        </SignUpTitle>
        <SignUpSubtitle>Connect with great local businesses</SignUpSubtitle>
        <SignUpText>
          By continuing, you agree to Yelp’s Terms of Service and acknowledge
          Yelp’s Privacy Policy.
        </SignUpText>
        <SignUpButtons/>
        <Info>Don't worry, we never post without your permission.</Info>
        <AlternativeElement>OR</AlternativeElement>
        <FormWraper/>
      </SignUpWraper>
    </Container>
  );
};

export default SignUp;
