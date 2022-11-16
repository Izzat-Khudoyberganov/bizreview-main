import React, { FC } from 'react'
import { ButtonSecondary } from '../../Button';
import { ListFormContainer, ListFormTitle, ListFormWraper } from '../style';
import {
    ListFormInfo,
    ListFormInput,
    ListFormText,
    SubText,
  } from "./style";
  
  const title: string = "Business resources, delivered to your inbox";
  const text: string =
    "Get the latest blog content, info on virtual events, and the occasional freebie";
  const subtext: string =
    "By continuing, you agree to Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy. Email";

 export const ListForm:FC = () => {
  return (
    <ListFormWraper>
      <ListFormContainer>
        <ListFormTitle>{title}</ListFormTitle>
        <ListFormText>{text}</ListFormText>
        <ListFormInfo>
          <ListFormInput placeholder="youremail@address.com" />
          <SubText>{subtext}</SubText>
          <ButtonSecondary
            style={{ marginTop: "30px", display: "block", margin: "0 auto" }}
          >
            Submit
          </ButtonSecondary>
        </ListFormInfo>
      </ListFormContainer>
    </ListFormWraper>
  )
}
 