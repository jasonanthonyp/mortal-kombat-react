import React from "react";
import Karacter from "./Karacter";

function KaracterList({ karacters }) {

  const karacterInfo = karacters.map(karacter => <Karacter key={karacter.id} karacter={karacter} />)

  return (
    <div className="cards">{karacterInfo} </div>
  );
}

export default KaracterList;
