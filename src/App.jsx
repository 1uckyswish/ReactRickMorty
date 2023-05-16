import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hompage from './Pages/Hompage.jsx/Hompage';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
    <Hompage />
    <Footer />
   </div>
  )
}

export default App
