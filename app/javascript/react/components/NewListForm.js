import React, { useState, useEffect } from "react"
import IconTile from "./IconTile"
import ColorTile from "./ColorTile"

const NewListForm = (props) => {
  const [formData, setFormData] = useState({
    name: ""
  })
  const [iconTiles, setIconTiles] = useState([])
  const [colorTiles, setColorTiles] = useState([])

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
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
  ]

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const submitForm = (event) => {
    event.preventDefault()

  }

  const makeTiles = () => {
    const iconData = iconArray.map((icon) => {
      return(<IconTile key={icon.fontAwesomeCode} icon={icon} />)
    })

    const colorData = colorArray.map((color) => {
      return(<ColorTile key={color} color={color}/>)
    })

    setIconTiles(iconData)
    setColorTiles(colorData)
  }

  useEffect(() => {
    makeTiles()
  }, [])


  return(
    <div>
      <h1>Create a New List</h1>
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