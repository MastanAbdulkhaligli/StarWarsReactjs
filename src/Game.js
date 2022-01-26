import React, { useState } from "react";
import "./Game.css";
import adam from "./Images/adam.jpg";
import Darth from "./Images/Darth.jpg";
import luke from "./Images/luke.jpg";
import Maul from "./Images/Maul.jpg";

const InsideGame = (props) => {
  const [enemies, setEnemies] = useState(props.enemies);

  let health_data = {
    "Obi-Wan Kenobi": 120,
    "Luke Skywalker": 100,
    "Darth Sidious": 150,
    "Darth Maul": 180,
  };

  const asArray = Object.entries(health_data);
  const [health, setHealth] = useState(asArray);

  const filtered = health.filter(
    ([key, value]) => value === "props.yourCharacter"
  );

  console.log(filtered);

  return (
    <>
      <div className="choose">
        <div>
          <h1>Your Character</h1>
          <h3>{props.characterName}</h3>
          <img src={props.yourCharacter} alt="Luke Skywalker" />
          <h4 style={{ color: "#ff4742" }}>HP {filtered}</h4>
        </div>
      </div>
      <h1>Enemies Available to Attack</h1>
      <h2> {console.log(props.enemies)}</h2>

      <div className="choose">
        <div>
          {enemies.map((user) => (
            <img src={user} alt="Luke Skywalker" />
          ))}
        </div>
      </div>
    </>
  );
};

const Choose = (props) => {
  const [character, setCharacter] = useState(null);

  return (
    <>
      <div className="choose grow">
        <div>
          <h3>Obi-Wan Kenobi</h3>
          <img
            onClick={() => {
              setCharacter("Obi-Wan Kenobi");
              props.setYourCharacter(adam);
              props.setCharacterName("Obi-Wan Kenobi");
              props.setEnemies([Darth, luke, Maul]);
            }}
            src={adam}
            alt="Obi-Wan Kenobi"
          />
          <h4 style={{ color: "#ff4742" }}> HP 120</h4>
        </div>

        <div>
          <h3>Luke Skywalker</h3>
          <img
            onClick={() => {
              setCharacter("Luke Skywalker");
              props.setYourCharacter(luke);
              props.setCharacterName("Luke Skywalker");
              props.setEnemies([adam, Darth, Maul]);
            }}
            src={luke}
            alt="Luke Skywalker"
          />
          <h4 style={{ color: "#ff4742" }}> HP 100</h4>
        </div>

        <div>
          <h3>Darth Sidious</h3>
          <img
            onClick={() => {
              setCharacter("Darth Sidious");
              props.setYourCharacter(Darth);
              props.setCharacterName("Darth Sidious");
              props.setEnemies([adam, luke, Maul]);
            }}
            src={Darth}
            alt="Darth Sidious"
          />
          <h4 style={{ color: "#ff4742" }}> HP 150</h4>
        </div>

        <div>
          <h3>Darth Maul</h3>
          <img
            onClick={() => {
              setCharacter("Darth Maul");
              props.setYourCharacter(Maul);
              props.setCharacterName("Darth Maul");
              props.setEnemies([adam, Darth, luke]);
            }}
            src={Maul}
            alt="Darth Maul"
          />
          <h4 style={{ color: "#ff4742" }}> HP 180</h4>
        </div>
      </div>
      <h1>Choose Your Character</h1>
      <h1 style={{ color: "green" }}>{character}</h1>
      <button onClick={() => props.setStart(true)} className="button-24">
        Start Game
      </button>
    </>
  );
};

const Game = () => {
  // Boolean for checking user select character or not
  const [start, setStart] = useState(false);

  // Character image link for passing to InsideGame function
  const [yourCharacter, setYourCharacter] = useState(null);

  // Character name for passing to InsideGame function
  const [characterName, setCharacterName] = useState(null);

  // Enemies
  const [enemies, setEnemies] = useState(null);

  return (
    <>
      {start ? (
        <InsideGame
          yourCharacter={yourCharacter}
          characterName={characterName}
          enemies={enemies}
        />
      ) : (
        <Choose
          start={start}
          setStart={setStart}
          yourCharacter={yourCharacter}
          setYourCharacter={setYourCharacter}
          characterName={characterName}
          setCharacterName={setCharacterName}
          enemies={enemies}
          setEnemies={setEnemies}
        />
      )}
    </>
  );
};

export default Game;
