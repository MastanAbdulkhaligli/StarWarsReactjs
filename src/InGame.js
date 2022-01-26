import React, { useState, useEffect } from "react";

const EndOfGame = (props) => {
  return (
    <>
      <h1>{props.message}</h1>
    </>
  );
};

const InGame = (props) => {
  // Destructing Character data
  let { id, img, name, health } = props.chosen;

  // Character health
  const [hp, setHp] = useState(health);

  // Enemies Data
  const [enemies, setEnemies] = useState(props.enemy);

  // "You Win" and "You Lost" message
  const [message, setMessage] = useState("");

  // Your hit and Enemies hit
  const [yourHit, setYourHit] = useState(0);
  const [enemyHit, setEnemyHit] = useState(0);

  useEffect(() => {
    if (hp <= 0) {
      setMessage("You Lost");
    }

    if (enemies.length === 0) {
      setMessage("You Win");
    }
    console.log(enemies);
  }, [hp, enemies]);

  const hit = () => {
    function randomly(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    // Randomly HP values
    let your_hit = randomly(15, 28);
    let enemy_hit = randomly(5, 15);

    setYourHit(your_hit);
    setEnemyHit(enemy_hit);

    // Extract enemy hit from your health
    setHp(hp - enemy_hit);

    // Takes enemies id's assign them into idOf
    let idOf = [];

    enemies.forEach((element, index) => {
      idOf[index] = element.id; // 100, 200, 300
    });

    enemies.forEach((element, index) => {
      if (index === 0) {
        element.health = element.health - your_hit;
      }

      if ((index === 0) & (element.health <= 0)) {
        enemies.shift();
      }
      //   element[idOf[0]] = element.health - your_hit;
    });

    setEnemies(enemies);
  };

  return message !== "" ? (
    <EndOfGame message={message} />
  ) : (
    <div>
      <div className="choose2 grow">
        <div>
          <h1 style={{ color: "green" }}>Your Character</h1>
          <h3>{name}</h3>
          <img src={img} alt={name} />
          <h4 style={{ color: "#ff4742" }}>HP {hp}</h4>
        </div>
      </div>

      <button onClick={() => hit()} className="button-24">
        Attack
      </button>

      <h1 className="space">
        You hit: {yourHit} Enemy Hits: {enemyHit}
      </h1>

      <h1 style={{ color: "red" }}>Your Enemies</h1>

      <div className="choose3 grow">
        {enemies.map((enemy) => {
          const { id, img, name, health } = enemy;

          return (
            <div className="choose3 grow" key={id}>
              <div>
                <div>
                  <h3>{name}</h3>
                  <img src={img} alt={name} />
                  {/* instead of isi[id] we can use "health"  */}
                  <h4 style={{ color: "#ff4742" }}>HP {health}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InGame;
