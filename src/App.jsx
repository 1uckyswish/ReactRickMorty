import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Homepage from './Pages/Hompage.jsx/Hompage';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
    <Homepage />
    <Footer />
   </div>
  )
}

export default App
