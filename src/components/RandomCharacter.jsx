import React, { useContext } from 'react'
import GlobalContext from '../controlstates/GlobalProvider';
import Character from './Character';


const RandomCharacter = () => {
    const {randomCharacter} = useContext(GlobalContext);
    const infos ={
        name:randomCharacter.name,
        species:randomCharacter.species,
        gender:randomCharacter.gender,
        origin:randomCharacter.origin.name,
        imageUrl:randomCharacter.image,
        location:randomCharacter.location.name,
        status:randomCharacter.status,
      
      }
      return (
        <div className="h-screen flex flex-col items-center justify-center xl:space-y-9 space-y-4 sm:space-y-0">
    <img
      className='xl:w-[100%] xl:h-[180px]  md:w-[100%] md:h-[180px] md:mt-[30px] sm:w-[100%] sm:h-[40px] sm:mt-[10px]'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png"
      alt="Rick and Morty"
      
    />
    <h1 className=" xl:text-[50px] text-4xl sm:text-xl font-semibold custom-font">
      Random Character
    </h1>
    {randomCharacter ? (
      <Character infos={infos} />
    ) : (
      <p>Loading...</p>
    )}
    <div className="h-12"></div>
  </div>
      );
}

export default RandomCharacter