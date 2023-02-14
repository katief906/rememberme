import React, { useState } from "react"
import ErrorList from "./ErrorList"

const NewTaskForm = (props) => {
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "",
    due_date: "",
    description: "",
    completed: "",
  })

  const [errors, setErrors] = useState({})
  const [displayForm, setDisplayForm] = useState("hide")

  const displayTaskForm = () => {
    if (displayForm === "hide") {
      setDisplayForm("show")
    } else {
      setDisplayForm("hide")
    }
  }

  const handleFormChange = (event) => {
    setNewTask({
      ...newTask,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["title", "completed"]
    requiredFields.forEach((field) => {
      if (newTask[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "must be provided",
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmitAddNewTask = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.addNewTask(newTask)
      setNewTask({
        title: "",
        priority: "",
        due_date: "",
        description: "",
        completed: "",
      })
      setDisplayForm("hide")
    }
  }

  return (
    <div className={`add-new-task-form add-task-button ${props.taskButton}`}>
      <button
        className="button add-task"
        type="button"
        onClick={displayTaskForm}
      >
        Click here to add a new task!
      </button>
      <form
        onSubmit={handleSubmitAddNewTask}
        className={`new-task ${displayForm}`}
      >
        <ErrorList errors={errors} />

        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleFormChange}
            className="form-field"
          />
        </label>

        <fieldset>
          <legend>Priority</legend>
          <input
            type="radio"
            name="priority"
            onChange={handleFormChange}
            value="1"
            id="1"
            checked={newTask.priority === "low"}
          />
          <label>1</label>
          <input
            type="radio"
            name="priority"
            onChange={handleFormChange}
            value="2"
            id="2"
            checked={newTask.priority === "medium"}
          />
          <label>2</label>
          <input
            type="radio"
            name="priority"
            onChange={handleFormChange}
            value="3"
            id="3"
            checked={newTask.priority === "high"}
          />
          <label>3</label>
        </fieldset>

        <fieldset>
          <legend>Due Date</legend>
          <input
            type="radio"
            name="due_date"
            onChange={handleFormChange}
            value="1 Day"
            id="1"
            checked={newTask.due_date === "1 day"}
          />
          <label>1 Day</label>
          <input
            type="radio"
            name="due_date"
            onChange={handleFormChange}
            value="2 Days"
            id="2"
            checked={newTask.due_date === "2 days"}
          />
          <label>2 Days</label>
          <input
            type="radio"
            name="due_date"
            onChange={handleFormChange}
            value="3 Days"
            id="3"
            checked={newTask.due_date === "3 days"}
          />
          <label>3</label>
          <input
            type="radio"
            name="due_date"
            onChange={handleFormChange}
            value="4 Days"
            id="4"
            checked={newTask.due_date === "4 days"}
          />
          <label>4</label>
          <input
            type="radio"
            name="due_date"
            onChange={handleFormChange}
            value="5 Days"
            id="5"
            checked={newTask.due_date === "5 days"}
          />
          <label>5</label>
        </fieldset>

        <label htmlFor="task_description">
          Description
          <textarea
            id="task_description"
            rows="4"
            type="text"
            name="task_description"
            value={newTask.description}
            onChange={handleFormChange}
            className="form-field"
          />
        </label>

        <fieldset>
          <legend>Not Completed</legend>
          <input
            type="radio"
            name="completed"
            onChange={handleFormChange}
            value="false"
            id="1"
            checked={newTask.completed === "Not Completed"}
          />
          <label>Not Completed</label>
          <input
            type="radio"
            name="completed"
            onChange={handleFormChange}
            value="true"
            id="2"
            checked={newTask.completed === "completed"}
          />
          <label>Completed</label>
        </fieldset>

        <div className="submit-button">
          <input
            className="button"
            type="submit"
            value="Add Task"
            onSubmit={handleSubmitAddNewTask}
          />
        </div>
      </form>
    </div>
  )
}

export default NewTaskForm