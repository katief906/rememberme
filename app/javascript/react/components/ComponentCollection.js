import React from "react";
import ListsIndexPage from "./Index/ListsIndexPage";
import ListShowPage from "./Show/ListShowPage";

function Index({toggleIndex, setShow}) {
  if (toggleIndex) {
    return <ListsIndexPage setShow={setShow}/>
  } else {
    return null
  }
}

function Show({toggleShow, id}) {
  if (toggleShow) {
    return <ListShowPage id={id}/>
  } else {
    return null
  }
}

export { Index, Show }