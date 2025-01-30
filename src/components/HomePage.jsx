import React, { useContext, useEffect } from 'react'
import GlobalContext from "../controlstates/GlobalProvider" 
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { handleClick, randomQuote,setRandomQuote,generateRandomQuote } = useContext(GlobalContext); 
  useEffect(() => {
    const initialQuote = generateRandomQuote();
    setRandomQuote(initialQuote);
  }, []);





  return (

    <div className=" min-h-screen flex items-center justify-center">
  <div className="flex flex-col justify-center items-center">
    <div className="lg:w-1/2 p-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/640px-Rick_and_Morty.svg.png"
        alt="Rick and Morty"
        className="w-full h-auto"
      />
    </div>
    <div className="lg:w-1/2 mt-3 p-4">
      <h1 className="font-custom text-4xl text-center">
        Inside The Rick And Morty Universe
      </h1>
      <h5 className="text-center">{randomQuote}</h5>
      <div className="flex justify-center mt-4">
        <Link to="/" type='button' className="bg-blue-600 text-[30px] p-3 rounded text-white" onClick={handleClick}>
          Click for new quote
        </Link>
      </div>
    </div>
    <div className="w-full mt-3 p-4">
      <img
        src="/images/homepage.jpg"
        alt="Home page"
        className="w-full h-auto border-4 border-green-500"
      />
    </div>
  </div>
</div>
  
  );
}

export default HomePage