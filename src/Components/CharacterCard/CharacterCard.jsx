import React, {useContext} from 'react'
import './CharacterCard.css'
import {Link} from 'react-router-dom';
import { ThemeContext } from '../../Contexts/ThemeContext';

function CharacterCard({character}) {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode?'character-card dark-card': 'character-card'}>
        <img src={character?.image} />
        <p>{character?.name}</p>
        <Link to={`/details/${character?.id}`}>See Details</Link>
    </div>
  )
}


export default CharacterCard