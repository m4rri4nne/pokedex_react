/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { GET_POKEMONS, GET_POKEMON_INFO } from "../api";

const Pokedex = ()=>{
    const [results, setResults] = React.useState([]);
    const [icons , setIcons] = React.useState([]);

    const {url, options} = GET_POKEMONS();
    
    async function getpokes() { // method responsible to get the information of the pokemons
        const pokemons = await fetch(url, options);
        const json = await pokemons.json();
        window.localStorage.setItem('pokemons', JSON.stringify(json.results));
        setResults(json.results);
    }
    
      async function getIcons() { // method responsible to set the use state 
        const iconPromises = results.map((element) => geticon(element.name)); //calling async function to get the image of the pokemon
        const iconResults = await Promise.all(iconPromises);
        window.localStorage.setItem('icons', JSON.stringify(iconResults)); // saving on localstorage
        setIcons(iconResults); // setting the icons 
      }
    
      async function geticon(name) { // do the fetch operation 
        const { url, options } = GET_POKEMON_INFO(name);
        const icons = await fetch(url, options);
        const response = await icons.json();
        return response.sprites['front_default'];
      }
    
      React.useEffect(() => {
        // Use useEffect to observe changes in 'results' and fetch icons
        if (results.length > 0) {
          getIcons();
        }
      }, [getIcons, results]);
    
    return(
        <>
        <header>
            <button onClick={getpokes}>Filter</button>
            <h1> Pokedex</h1>
        </header>
        <section>
            <input type="text"/>
        </section>
        <section>
        <div>
          <p>Pokemons</p>
          {results.map((element, index) => (
            <div key={index}>
              <p>{element.name}</p>
              <img src={icons[index]} alt={element.name} />
            </div>
          ))}
        </div>
        </section>
        </>
    );
}

export default Pokedex