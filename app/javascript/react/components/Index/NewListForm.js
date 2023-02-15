import React, { useState, useEffect } from "react"
import IconTile from "../IconTile"
import ColorTile from "../ColorTile"
import ErrorList from "../ErrorList"
import _ from "lodash"

const NewListForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    color: ""
  })
  const [iconTiles, setIconTiles] = useState([])
  const [colorTiles, setColorTiles] = useState([])
  const [selectedIcon, setSelectedIcon] = useState({
    name: "",
    fontAwesomeCode: ""
  })
  const [selectedColor, setSelectedColor] = useState({
    id: "",
    name: ""
  })

  const iconArray = [
    {
      name: "bell",
      fontAwesomeCode: "fa-solid fa-bell"
    },
    {
      name: "bolt",
      fontAwesomeCode: "fa-solid fa-bolt"
    },
    {
      name: "bookmark",
      fontAwesomeCode: "fa-solid fa-bookmark"
    },
    {
      name: "burst",
      fontAwesomeCode: "fa-solid fa-burst"
    },
    {
      name: "certificate",
      fontAwesomeCode: "fa-solid fa-certificate"
    }
  ]

  const colorArray = [
    {id: 1, name: "red"},
    {id: 2, name: "orange"},
    {id: 3, name: "yellow"},
    {id: 4, name: "green"},
    {id: 5, name: "blue"},
    {id: 6, name: "purple"}
  ]

  const [errors, setErrors] = useState({})

  const validForSubmission = () => {
    let submitErrors = {}
    if (formData.name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        name: "is blank"
      }
    }

    if (selectedColor.name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        color: "is blank"
      }
    }

    if (selectedIcon.name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        icon: "is blank"
      }
    }

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const makeIconTiles = () => {
    const iconData = iconArray.map((icon) => {
      return(<IconTile key={icon.fontAwesomeCode} icon={icon} setSelectedIcon={setSelectedIcon} getIconStatus={getIconStatus}/>)
    })
    
    setIconTiles(iconData)
  }

  const makeColorTiles = () => {
    const colorData = colorArray.map((color) => {
      return(<ColorTile key={color.id} color={color} setSelectedColor={setSelectedColor} selectedColor={selectedColor} getColorStatus={getColorStatus}/>)
    })
    
    setColorTiles(colorData)
  }

  const getIconStatus = (icon) => {
    if (icon.name === selectedIcon.name) {
      icon.selectedStatus = "selected"
    }
  }

  const getColorStatus = (color) => {
    if (color.name === selectedColor.name) {
      color.selectedStatus = "selected"
    }
  }
  
  useEffect(() => {
    makeIconTiles()
  }, [selectedIcon])

  useEffect(() => {
    makeColorTiles()
  }, [selectedColor])

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const submitForm = async(event) => {
    event.preventDefault()

    const fullFormData = {
      ...formData,
      color: selectedColor.name,
      icon: selectedIcon.fontAwesomeCode
    }

    setFormData({
      ...formData,
      fullFormData
    })

    if (validForSubmission()) {
      try {
        const response = await fetch("/api/v1/lists", {
          credentials: "same-origin",
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fullFormData)
        })
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          throw new Error(errorMessage)
        }
        const responseBody = await response.json()
        const newList = responseBody.newList
      } catch(error) {
        console.error(`Error in fetch: ${error.message}`)
      }
    }
  }

  console.log(selectedColor)
  console.log(selectedIcon)

  return(
    <div>
      <h1>Create a New List</h1>
      <ErrorList errors={errors} />
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>Icon:</label>
        <div className="grid grid-x">
          {iconTiles}
        </div>

        <label>Color:</label>
        <div className="grid grid-x">
          {colorTiles}
        </div>
        <p></p>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default NewListForm