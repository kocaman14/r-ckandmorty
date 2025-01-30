import React, { useContext } from 'react'
import GlobalContext from '../controlstates/GlobalProvider'

const LocationList = () => {
const {locations} = useContext(GlobalContext); 



return (
    <div className="container mx-auto p-4">
      <img
        src="https://preview.redd.it/o6cwlzg3exk41.png?width=960&crop=smart&auto=webp&v=enabled&s=e29c84013ab4bb1bf5a51ded8b4b31ff478a9feb"
        alt="Rick and Morty"
        className="mx-auto"
      />
      <h1 className="text-6xl font-bold text-center mt-6">
        Rick and Morty Location List
      </h1>
      <table className=" min-w-full mt-6 table-auto border-collapse ">
        <thead className="bg-green-100">
          <tr>
            <th className="px-4 py-2 border-b text-left">Location Name</th>
            <th className="px-4 py-2 border-b text-left">Type</th>
            <th className="px-4 py-2 border-b text-left">Dimension</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id} className="bg-gray-100">
              <td className="px-4 py-2 border-b">{location.name}</td>
              <td className="px-4 py-2 border-b">{location.type}</td>
              <td className="px-4 py-2 border-b">{location.dimension}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationList