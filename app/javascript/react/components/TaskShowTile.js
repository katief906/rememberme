import React from "react"

const TaskShowTile = (props) => {
  const task = props.task
  return(
    <div>
      <li>{task.title}: {task.description}</li>
    </div>
  )
}

export default TaskShowTile