import React, { useState, useEffect } from "react";

function App() {
  const [gamesList, setGamesList] = useState([]);

  const API_KEY = "26ca020995fa4556beee331585dac50d";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.results);
        setGamesList(data.results);
      });
  }, []);

  return (
    <>
      <h1>Les derniers jeux vidéos en vogue</h1>

      <ul>
        {gamesList.map((g) => (
          <li key={g.id}>
            {g.id} - {g.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
