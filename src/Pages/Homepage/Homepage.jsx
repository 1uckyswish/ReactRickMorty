import React from 'react'
import './Homepage.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import Search from '../../Components/Search/Search';

function Homepage() {
  // create state of characters
  const [characters, setCharacters] = useState([]);

  //https://rickandmortyapi.com/api/character

  //make api call when page loads with useEffect
  useEffect(
    ()=>{
      console.log("homepage")
      //call api to get characters
      axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res =>{
        console.table(res.data.results)
        setCharacters(res.data.results)
      }

      )
      .catch(err => console.error(err))
    }, [] // empty array means run one time when page loads
  )

  return (
    <div className='home-container'>
      <Search setCharacters={setCharacters}/>
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

export default Homepage