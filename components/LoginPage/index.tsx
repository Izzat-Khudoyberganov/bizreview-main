import React, { FC } from "react"
import SignUpButtons from "../SignUp/SignUpButtons"
import {
  LoginWraper,
  LoginTitle,
  SignUpTitle,
  PrivacyText,
  LoginForm,
  EmailInput,
  PasswordInput,
  LoginBtn,
  Link,
  AlternativeElement,
} from "./style"

type Props = {}

const LoginPage: FC = (props: Props) => {
  return (
      <LoginWraper>
        <LoginTitle>Login to <span>bizreview</span></LoginTitle>
        <SignUpTitle>
          New to Yelp?
          <span>Sign Up</span>
        </SignUpTitle>
        <PrivacyText>
          By logging in, you agree to BIZREVIEWs Terms of Service and Privacy
          Policy.
        </PrivacyText>
        <SignUpButtons/>
        <AlternativeElement>OR</AlternativeElement>

        <LoginForm>
          <EmailInput type='email' placeholder='Email' />
          <PasswordInput type='password' placeholder='Password' />
          <Link>Forget password?</Link>
          <LoginBtn>Log In</LoginBtn>
        </LoginForm>
        <Link>New to bizreview? Sign Up</Link>
      </LoginWraper>
  )
}

export default LoginPage