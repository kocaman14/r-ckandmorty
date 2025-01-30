import React, { useContext, useEffect} from "react";
import { useParams} from "react-router-dom";
import GlobalContext from "../controlstates/GlobalProvider";

function CharacterDetails() {
const {setCharacter,character} = useContext(GlobalContext); 
  const { id } = useParams();
  console.log(useParams())
console.log(id)

 useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

      if (response.ok) {
        const data = await response.json();
        setCharacter(data);
        console.log(data);
      }
    }

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
    <img
      className="image-border img-fluid mx-auto"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png"
      alt="Rick and Morty"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
    <h1 className="text-3xl font-bold text-center mt-6">Individual Character Details</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div>
        <h2 className="text-[50px] font-semibold">{character.name}</h2>
        <p className="text-[30px]"><span className="font-bold text-[30px]">Species:</span> {character.species}</p>
        <p className="text-[30px]"><span className="font-bold text-[30px]">Gender:</span> {character.gender}</p>
        <p className="text-[30px]"><span className="font-bold text-[30px]">Origin:</span> {character.origin.name}</p>
        <p className="text-[30px]"><span className="font-bold text-[30px]">Location:</span> {character.location.name}</p>
        <p className="text-[30px]"><span className="font-bold text-[30px]">Status:</span> {character.status}</p>
      </div>
      <div>
        <img
          src={character.image}
          alt={character.name}
          className="border-4 border-green-600 w-full"
        />
      </div>
    </div>
    <div className="h-12"></div>
  </div>

  );
}

export default CharacterDetails;
