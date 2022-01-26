import React, { useState } from "react";
import "./Game.css";
import "./Navbar.css";
import { Data } from "./Data";

const ChooseCharacter = (props) => {
  // Destructiring props
  const { setStart, setChosen, setEnemy } = props;

  // Assigning Data to "characters" state
  const [characters, setCharacters] = useState(Data);
  // Assigning selected character's id and name to select state
  const [select, setSelect] = useState("");

  // Choosing Enemies and assigning it into state then pass it to parent
  const [enemies, setEnemies] = useState(Data);

  const [me, setMe] = useState();

  // let newPeople;

  const removeItem = (n) => {
    let newPeople = enemies.filter((person) => person.id !== n);
    setEnemies(newPeople);
    setEnemy(enemies);
  };

  return (
    <>
      <div className="choose grow">
        {characters.map((character) => {
          const { id, img, name, health } = character;
          return (
            <div key={id}>
              <h3>{name}</h3>
              <img
                onClick={() => {
                  setSelect({ id: id, name: name, img: img, health: health });
                  setMe(id);
                  removeItem(id);
                }}
                src={img}
                alt={name}
              />
              <h4 style={{ color: "#ff4742" }}> HP {health}</h4>
            </div>
          );
        })}
      </div>

      <h1>Choose Your Character</h1>
      <h1 style={{ color: "green" }}>{select.name}</h1>
      <button
        onClick={() => {
          setStart(true);
          setChosen(select);
          removeItem(me);
        }}
        className="button-24"
      >
        Start Game
      </button>
    </>
  );
};

export default ChooseCharacter;
