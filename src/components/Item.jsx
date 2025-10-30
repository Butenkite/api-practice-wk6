import Picture from "./Picture";
import Info from "./Info";
import { useState, useEffect } from "react";

export default function Item() {
  const [pokeId, setPokeId] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(pokeData => {
      if (!pokeData.sprites) {
        setError(true);
      } else {
        setPokemon(pokeData);
        setError(false);
      }
    })
    .catch(() => setError(true));
}, [pokeId]);

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(pokeData => {
      if (!pokeData.sprites) {
        setError(true);
      } else {
        setPokemon(pokeData);
        setError(false);
      }
    })
    .catch(() => setError(true));
}, [pokemonName]);

  useEffect(() => {
    if (pokemon !== null) setImages(pokemon.sprites.other["official-artwork"]);
    setLoading(false);
  }, [pokemon]);

  function showNext() {
    setPokeId((prev) => prev + 1);
    setLoading(true);
  }

  function showPrev() {
    setPokeId((prev) => prev - 1);
    setLoading(true);
  }

  if (loading) {
    return (
      <>
        <h1>Content is loading...</h1>
        <div id="loading-div"></div>
      </>
    );
  }

  function handleTryAgain() {
    setError(false)
  }

  function submitSearch(){
    let pokemonSearchedName = document.getElementById("searchName");
    setPokemonName(pokemonSearchedName.value);
    setPokeId(pokemon.id)
    console.log(pokemon)
  }

    if (error) {
    return (
      <>
        <h1>Error loading content.</h1>
        <button onClick={handleTryAgain}>Try Again</button>
        <div id="error-div"></div>
      </>
    );
  }

  return (
    <>
      <div>
        {pokemon !== null && <Picture images={images} loading={loading}/>}
        <label>Search by name: <input name = "searchName" type = "text" id = "searchName"></input></label> 
        <button onClick = {submitSearch}>Submit</button>
        <Info pokeData={pokemon}/>
        <div>{pokeId != 1 && <button onClick={showPrev}>Previous</button>}</div>
        <button onClick={showNext}>Next</button>
      </div>
    </>
  );
}
