import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Episodes from './Pages/Episodes/Episodes';
import About from './Pages/About/About';
import CharcterDetails from './Pages/CharacterDetails/CharcterDetails';
import ThemeContextProvider from './Contexts/ThemeContext';
import FavoritesContextProvider from './Contexts/FavoritesContext';
import Favorites from './Pages/Favorites/Favorites';

function App() {
// when routing use a colon to set a paramter
////* anything within the routes has the ability to use the Global Provider functions
  return (
  <div>
    <BrowserRouter>
    <ThemeContextProvider>
    <FavoritesContextProvider>
    <Header />
    
  <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/favorites' element={<Favorites />} />
    <Route path='/details/:characterId' element={<CharcterDetails />}/>
    <Route path='/Episodes' element={<Episodes />}/>
  </Routes>

    <Footer />
    </FavoritesContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  </div>
  )
}

export default App
