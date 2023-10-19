import React, { useState } from "react"



function Karacter({ karacter }) {
  const { name, image, description } = karacter

  const [frontCard, setFrontCard] = useState(true)

  return (
    <div className="karacterkard" onClick={() => setFrontCard(!frontCard)}>
      {frontCard ?

        <img src={image} alt={name} />

        :
        <div className="backkard">
          <h3>{name}</h3>
          <h4>{description}</h4>
        </div>
        }


    </div>

  )


}

export default Karacter