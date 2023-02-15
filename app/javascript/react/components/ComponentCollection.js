import React from "react";
import ListsIndexPage from "./Index/ListsIndexPage";
import ListShowPage from "./Show/ListShowPage";

function ComponentChoice({page, setPage}) {
  if(page.page === "index") {
    return <ListsIndexPage setPage={setPage}/>
  } else if (page.page === "show") {
    return <ListShowPage id={page.id} />
  }
}

export default ComponentChoice