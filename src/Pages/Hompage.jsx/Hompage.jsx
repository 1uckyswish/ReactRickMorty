import React from 'react'
import './Hompage.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CharacterCard from '../../Components/CharacterCard/CharacterCard';

function Hompage() {
  // create state of characters
  const [characters, setCharacters] = useState([]);

  //https://rickandmortyapi.com/api/character

  //make api call when page loads with useEffect
  useEffect(
    ()=>{
      console.log("Hompageloaded")
      //call api to get characters
      axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res =>{
        console.log(res.data.results)
        setCharacters(res.data.results)
      }

      )
      .catch(err => console.error(err))
    }, [] // empty array means run one time when page loads
  )

  return (
    <div className='home-container'>
      <h1>Main Characters</h1>
      <div className='characters-container'>
        {
        characters.map(item =><CharacterCard key={item.id} character={item} />)
        // charcters.map(item-><p> key={item.id} character={item}</p>)
        }
      </div>
    </div>
  )
}

export default Hompage