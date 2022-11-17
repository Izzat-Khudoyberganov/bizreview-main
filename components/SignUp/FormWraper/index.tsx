import Link from "next/link";
import React from "react";
import { Day, Month, Years } from "./data";
import {
  DefaultInput,
  DefaultSelect,
  FormContainer,
  LinkText,
  LinkToLogin,
  NameForm,
  NameInput,
  OptionalText,
  SelectOptions,
  SignUpBtn,
} from "./style";

const FormWraper = () => {
  return (
    <FormContainer>
      <NameForm>
        <NameInput type="text" placeholder="First name" required />
        <NameInput type="text" placeholder="Last name" required />
      </NameForm>

      <DefaultInput type="email" placeholder="Email" required />
      <DefaultInput type="password" placeholder="Password" required />
      <DefaultInput type="number" placeholder="Zip Code" required />
      <OptionalText>
        Birthday <span>Optional</span>
      </OptionalText>

      <SelectOptions>
        <DefaultSelect name="" id="">
          {Month.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </DefaultSelect>
        <DefaultSelect name="" id="">
          {Day.map((el: any, i: number) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </DefaultSelect>
        <DefaultSelect name="" id="">
          {Years.map((el: any, i: number) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </DefaultSelect>
      </SelectOptions>
      <SignUpBtn>Sign Up</SignUpBtn>
      <LinkText>
        Already on bizreviews? {" "} 
        <Link href="/login">
          <LinkToLogin>Log in</LinkToLogin>
        </Link>
      </LinkText>
    </FormContainer>
  );
};

export default FormWraper;
