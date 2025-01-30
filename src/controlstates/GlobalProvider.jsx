
import React, { createContext, useEffect, useState } from 'react';
import { rickAndMortyQuotes } from '../components/Quotations';
import { BrowserRouter, Route, Router, useLocation } from 'react-router-dom';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [randomQuote, setRandomQuote] = useState('');
  const [characters, setCharacters] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterType, setFilterType] = useState("name");
  const [character, setCharacter] = useState(null);
  const [locations, setLocations] = useState([]);
  const generateRandomQuote = () => {
    const quoteKeys = Object.keys(rickAndMortyQuotes);
    const randomQuote = quoteKeys[Math.floor(Math.random() * quoteKeys.length)];
    return rickAndMortyQuotes[randomQuote];
  };
  const handleClick = () => {
    const newQuote = generateRandomQuote();
    setRandomQuote(newQuote);
  };
  const fetchCharacters = async () => {
    const allCharacters = [];
    for (let page = 1; page <= 40; page++) {
      const url = `https://rickandmortyapi.com/api/character?page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      allCharacters.push(...data.results);
    }
    setCharacters(allCharacters.slice(0, 800));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  const getFilteredCharacters = () => {
    return characters.filter((c) =>
      String(c[filterType]).toLowerCase().includes(filterValue.toLowerCase())
    );

  }
  async function fetchLocations() {
    const response = await fetch("https://rickandmortyapi.com/api/location");

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setLocations(data.results);
      console.log("sayfa yenılendı")
    }
  }

  useEffect(() => {
    fetchLocations();
  }, []);

  const location = useLocation();
  useEffect(() => {
    const fetchRandomCharacter = async () => {
      try {
        const characterUrl = 'https://rickandmortyapi.com/api/character/';
        const characterResponse = await fetch(characterUrl);
        if (characterResponse.ok) {
          const characterData = await characterResponse.json();
          const totalCharacters = characterData.info.count;
          const randomCharacterId = Math.floor(Math.random() * totalCharacters) + 1;
          const randomCharacterUrl = `${characterUrl}${randomCharacterId}`;
          const randomCharacterResponse = await fetch(randomCharacterUrl);
          if (randomCharacterResponse.ok) {
            const randomCharacterInfo = await randomCharacterResponse.json();
            setRandomCharacter(randomCharacterInfo);
          } else {
            throw new Error('Error retrieving random character');
          }
        } else {
          throw new Error('Error retrieving character list');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRandomCharacter();
  }, [location]);





  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen ,handleClick,randomQuote,setRandomQuote,generateRandomQuote,getFilteredCharacters,handleFilterType,handleFilterChange,character,setCharacters,characters,setCharacter,locations,randomCharacter}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext
