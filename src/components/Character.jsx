import React from 'react'

const Character = ({infos}) => {
 const{name,species,gender,origin,imageUrl,location,status} = infos   
    return (
        <div className='flex flex-col space-y-4 items-center sm:space-y-0 xl:space-y-3'>
          <h1 className='font-bold text-3xl sm:text-xl xl:text-[30px]'>{name}</h1>
          <p>
            <b>Species:</b> {species}
          </p>
          <p>
            <b>Gender:</b> {gender}
          </p>
          <p>
            <b>Origin:</b> {origin}
          </p>
          <p>
            <b>Location:</b> {location}
          </p>
          <img className='xl:w-[400px] xl:h-[400px]  lg:w-[280px] lg:h-[270px] md:w-[200px] md:h-[170px] sm:w-[180px] sm:h-[99px] w-[200px] h-[150px]' src={imageUrl} alt={name} style={{ border: "4px solid #00b601" }} />
          <p></p>
          <p>
            <b>Status:</b> {status}
          </p>
        </div>
      );
}

export default Character