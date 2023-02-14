import React from "react" 
import _ from "lodash"

const ErrorList = (props) => {
  const badFields = Object.keys(props.errors)
  if (badFields.length > 0) {
    let index = 0
    const listItems = badFields.map((field) => {
      index++
      return (
        <li key={index}>
          {_.startCase(field)} {props.errors[field]}
        </li>
      )
    })

    return (
      <div className="callout alert">
        <ul>
          {listItems}
        </ul>
      </div>
    )
  } else {
    return ""
  }
}

export default ErrorList