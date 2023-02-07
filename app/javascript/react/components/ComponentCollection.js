import React from "react";
import ListsIndexPage from "./Index/ListsIndexPage";

function Index({toggleIndex, setShow}) {
  if (toggleIndex) {
    return <ListsIndexPage setShow={setShow}/>
  } else {
    return null
  }
}

export { Index }