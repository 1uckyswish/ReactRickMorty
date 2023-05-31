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

function App() {
// when routing use a colon to set a paramter
  return (
  <div>
    <BrowserRouter>
    <ThemeContextProvider>
    <Header />
  <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/details/:characterId' element={<CharcterDetails />}/>
    <Route path='/Episodes' element={<Episodes />}/>
  </Routes>
    <Footer />
    </ThemeContextProvider>
    </BrowserRouter>
  </div>
  )
}

export default App
