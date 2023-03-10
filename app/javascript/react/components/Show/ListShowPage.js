import React, { useState, useEffect } from "react"
import TaskShowTile from "./TaskShowTile"

const ListShowPage = (props) => {
  const [list, setList] = useState({
    tasks: []
  })

  const fetchList = async() => {
    try {
      const response = await fetch(`/api/v1/lists/${props.id}`)
      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const listData = await response.json()
      setList(listData.list)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  
  let taskCollection

  if (list.tasks !== []) {
    taskCollection = list.tasks.map((task) => {
      return(
        <TaskShowTile key={task.id} task={task}/>
      )
    })
  }

  const handleClick = (e) => {
    props.setPage({
      page: "task",
      id: e.currentTarget.id
    })
  }

  useEffect(() => {
    fetchList()
  }, [props.id])

  return (
    <div>
      <h1>{list.name}</h1>
      <ul>
        {taskCollection}
      </ul>
      <button id={props.id} className="button" onClick={handleClick}>
        Add a New Task
      </button>
    </div>

  )

}

export default ListShowPage