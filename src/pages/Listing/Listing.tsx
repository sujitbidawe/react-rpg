import { useState, useEffect } from "react";
import "./Listing.css";
import axios from "axios";
import knight from "../../assets/knight.jpg";
import mage from "../../assets/mage.jpg";
import cleric from "../../assets/cleric.jpg";

function Listing() {
  const [players, setPlayers] = useState<any[]>([]);

  const imageMapper: any = {
    Knight: knight,
    mage: mage,
    cleric: cleric,
  };

  useEffect(() => {
    const getPlayers = async () => {
      const res = await axios.get("http://localhost:5290/api/Character/GetAll");

      setPlayers(res.data.data);
    };

    getPlayers();
  }, []);

  return (
    <div className="listing">
      <ul className="books-grid">
        {players.map((player) => {
          return (
            <li className="player-box" key={player.id}>
              <div className="left-box">
                <img src={imageMapper[player.class]} alt="avatar"></img>
              </div>
              <div className="right-box">
                <span>
                  Name: <strong>{player.name}</strong>
                </span>
                <span>
                  Class: <strong>{player.class}</strong>
                </span>
                {/* <span>
                  Defence: <strong>{player.defence}</strong>
                </span>
                <span>
                  Intelligence: <strong>{player.intelligence}</strong>
                </span>
                <span>
                  Strength: <strong>{player.strength}</strong>
                </span>
                <span>
                  Hit points: <strong>{player.hitPoints}</strong>
                </span> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Listing;
