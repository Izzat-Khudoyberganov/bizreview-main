import React from "react";
import { ListForm } from "./ListForm";
import Start from "./Start";
import { ListWraper } from "./style";
import Tabs from "../PopularBusiness/Tabs";
import YouTube from "./YouTube";

const GetList = () => {
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

export default GetList;
