import React from "react";
import { ListForm } from "./ListForm";
import Start from "./Start";
import { ListWraper } from "./style";
import Tabs from "./Tabs";
import YouTube from "./YouTube";

const GetList = () => {
  return (
    <>
      <ListWraper>
        <ListForm />
        <YouTube />
        <Start />
      </ListWraper>
      <Tabs/>
    </>
  );
};

export default GetList;
