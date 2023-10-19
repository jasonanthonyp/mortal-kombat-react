import React from "react";
// import KombatForm from "./KombatForm";
// import Search from "./Search";
import KaracterList from './KaracterList'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import KombatForm from "./KombatForm";

export default function KombatPage() {

    const [karacters, setKaracters] = useState(useLoaderData())

    const onAddKaracter = (newKaracter) => {
        fetch("http://localhost:3000/karacters", {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(newKaracter)
      })
      .then(res => res.json())
      .then(data => setKaracters([...karacters, data]))
      }

    return (
        <main className="kombatpage">
            <KombatForm onAddKaracter={onAddKaracter}/>
            {/* <Search /> */}
            <KaracterList karacters={karacters}/>
        </main>
    )
}