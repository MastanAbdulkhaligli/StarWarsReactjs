import React, { useState } from "react";
import ChooseCharacter from "./ChooseCharacter";
import InGame from "./InGame";
import { Data } from "./Data";

const Play = () => {
  const [start, setStart] = useState(false);
  const [chosen, setChosen] = useState();

  const [enemy, setEnemy] = useState(Data);

  return (
    <div>
      {start ? (
        <InGame chosen={chosen} setChosen={setChosen} enemy={enemy} />
      ) : (
        <ChooseCharacter
          setStart={setStart}
          setChosen={setChosen}
          enemy={enemy}
          setEnemy={setEnemy}
        />
      )}
    </div>
  );
};

export default Play;
