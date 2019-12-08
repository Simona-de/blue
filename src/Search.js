import React from "react";
import { Hoshi } from "react-native-textinput-effects";

export default function Search() {
  const hoshiInput = (
    <Hoshi
      label={"Town"}
      // this is used as active border color
      borderColor={"#b76c94"}
      // active border height
      borderHeight={3}
      inputPadding={16}
      // this is used to set backgroundColor of label mask.
      // please pass the backgroundColor of your TextInput container.
      backgroundColor={"#F9F7F6"}
    />
  );
}
