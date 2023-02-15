import React from "react";
import ListsIndexPage from "./Index/ListsIndexPage";
import ListShowPage from "./Show/ListShowPage";
import NewListForm from "./Index/NewListForm"
import NewTaskForm from "./Show/NewTaskForm"

function ComponentChoice({page, setPage}) {
  if(page.page === "index") {
    return <ListsIndexPage setPage={setPage}/>
  } else if (page.page === "show") {
    return <ListShowPage id={page.id} setPage={setPage}/>
  } else if (page.page === "form") {
    return <NewListForm />
  } else if (page.page === "task") {
    return <NewTaskForm id={page.id}/>
  }
}

export default ComponentChoice