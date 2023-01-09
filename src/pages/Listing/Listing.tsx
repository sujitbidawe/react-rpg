import { useState, useEffect } from "react";
import "./Listing.css";
import axios from "axios";

function Listing() {

  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
		const getPlayers = async () => {
			const res = await axios.get('http://localhost:5290/api/Character/GetAll');
      
      setPlayers(res.data.data);
		}

		getPlayers();
	}, []);

  return (
    <div className="listing">
      <ul className="books-grid">
        {
            players.map((player) => {
                return (
                    <li key={player.id}>{player.name}</li>
                )
            })
        }
      </ul>
    </div>
  );
}

export default Listing;
