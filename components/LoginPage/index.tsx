import Link from "next/link";
import React, { FC } from "react";
import SignUpButtons from "../SignUp/SignUpButtons";
import {
  LoginWraper,
  LoginTitle,
  SignUpTitle,
  PrivacyText,
  LoginForm,
  EmailInput,
  PasswordInput,
  LoginBtn,
  AlternativeElement,
  ForgetPasswordLink,
  SignUpRow,
} from "./style";

export const LoginPage: FC = () => {
  return (
    <LoginWraper>
      <LoginTitle>
        Login to <span>bizreview</span>
      </LoginTitle>
      <SignUpTitle>
        New to bizreview?
        <span>Sign Up</span>
      </SignUpTitle>
      <PrivacyText>
        By logging in, you agree to BIZREVIEWs Terms of Service and Privacy
        Policy.
      </PrivacyText>
      <SignUpButtons />
      <AlternativeElement>OR</AlternativeElement>

      <LoginForm>
        <EmailInput type="email" placeholder="Email" />
        <PasswordInput type="password" placeholder="Password" />
        <Link href="/">
          <ForgetPasswordLink>Forget password?</ForgetPasswordLink>
        </Link>
        <LoginBtn>Log In</LoginBtn>
      </LoginForm>
      <SignUpRow>
        New to bizreview? 
        <Link href="/signup">
          <ForgetPasswordLink> Sign Up</ForgetPasswordLink>
        </Link>
      </SignUpRow>
    </LoginWraper>
  );
};
