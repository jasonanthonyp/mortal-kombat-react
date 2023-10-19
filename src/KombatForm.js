import React, { useState } from "react"


function KombatForm({ onAddKaracter }) {

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        onAddKaracter(formData)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="ui segment">
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="inline fields">
              <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange}/>
              <input type="text" name="image" placeholder="image-url" value={formData.image} onChange={handleChange}/>
              <input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange}/>
            </div>
            <button className="ui button" type="submit">
              Add Karacter
            </button>
          </form>
        </div>
      );
    }

export default KombatForm