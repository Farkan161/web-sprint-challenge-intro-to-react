import axios from 'axios';
import React,{useState, useEffect} from 'react';

// const myUrl = 'https://swapi.dev/api/people/'
const App = () => {

  const [characters, setCharacters] = useState([]);
  const [start, setStart] = useState(true);

  useEffect(() => {
    function getCharacters(myUrl) {
      axios.get(myUrl)
        .then(res => {
          const characters = res.data;
          setCharacters(characters)
          console.log(characters);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  
    const myUrl= 'https://swapi.dev/api/people/'
    getCharacters(myUrl);
  }, []);
   


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">character charact</h1>
      {
      characters.map(character => <div key={character.name}>{character.name}</div>)
      }
    </div>
  );
};

export default App;
