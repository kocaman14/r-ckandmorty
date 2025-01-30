
import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav"
import HomePage from './components/HomePage';
import { GlobalProvider } from "./controlstates/GlobalProvider" 
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Footer from './components/Footer';
import LocationList from './components/LocationList';
import RandomCharacter from './components/RandomCharacter';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
      <BrowserRouter>
    <GlobalProvider> 
        <Nav />
        <div className="bg-[#26b1c6] min-h-screen flex items-center justify-center"
        >

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/random" element={<RandomCharacter />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
        <Footer />
    </GlobalProvider>
      </BrowserRouter>
  );
};

export default App;
