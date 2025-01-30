import React, { useContext } from 'react'
import GlobalContext from '../controlstates/GlobalProvider';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    const {getFilteredCharacters,handleFilterType,handleFilterChange } = useContext(GlobalContext); 
    return (
        <div className="container mx-auto p-4 ">
          <img
            src="https://pbs.twimg.com/media/CcvcLQvW0AAlEtL?format=jpg&name=medium"
            alt="Rick and Morty"
            className="w-full h-auto mb-6"
          />
          <h1 className="text-5xl font-extrabold text-center mb-8">Rick and Morty Character List</h1>
      
          <div className="mb-4 flex justify-center items-center">
            <label htmlFor="character-select" className="mr-2 text-lg">Search by Name:</label>
            <select onChange={handleFilterType} className="p-2 border rounded-md">
              <option value="name">Name</option>
              <option value="species">Species</option>
            </select>
            <input
              onChange={handleFilterChange}
              placeholder="Name"
              className="ml-2 p-2 border rounded-md"
            />
          </div>
      
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Picture</th>
                  <th className="px-6 py-4 text-left">Species</th>
                  <th className="px-6 py-4 text-left">Origin</th>
                  <th className="px-6 py-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredCharacters().map((character) => (
                  <tr key={character.id} className="border-b hover:bg-gray-100">
                    <td className="px-6 py-4">
                      <Link to={`/characters/${character.id}`} className="text-blue-500 hover:underline">
                        {character.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-24 h-24 object-cover border-2 border-black"
                      />
                    </td>
                    <td className="px-6 py-4">{character.species}</td>
                    <td className="px-6 py-4">{character.origin.name}</td>
                    <td className="px-6 py-4">{character.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
      
}

export default CharacterList