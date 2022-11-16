import React, { FC } from "react";
import { ListForm } from "./ListForm";
import {Start} from "./Start";
import { ListWraper } from "./style";
import Tabs from "../PopularBusiness/Tabs";
import YouTube from "./YouTube";

export const GetList:FC = () => {
  return (
    <>
      <ListWraper>
        <ListForm />
        <YouTube />
        <Start />
        <Tabs />
      </ListWraper>
    </>
  );
};


