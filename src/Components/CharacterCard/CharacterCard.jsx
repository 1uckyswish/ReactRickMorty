import React, {useContext, useState, useEffect} from 'react'
import './CharacterCard.css'
import {Link} from 'react-router-dom';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from '../../Contexts/FavoritesContext';

function CharacterCard({character}) {
  const {darkMode} = useContext(ThemeContext)
  //*start with a variable to star
  // const isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false);

  //*access the global context to pass through files
  //* data is stored in an OBJECT so do curly braces compared to square
  const {favorites, addCharacter, removeCharacter} = useContext(FavoritesContext)

  //* need a useEffect ti set value of favorite
  useEffect(
    ()=>{
      //* is this character already in favorites?
      setIsFavorite(favorites.find(item => item.id === character.id))
    //* anytime there is a change in favorites the useEffect will activate
    }, [favorites]
  )

  return (
    <div className={darkMode?'character-card dark-card': 'character-card'}>
        <img src={character?.image} />
        <p>{character?.name}</p>
        <Link to={`/details/${character?.id}`}>See Details</Link>
        {
          // *if true or false lets do this
          isFavorite?
          // *  dark icon
          <FaHeart className='heart-icon' onClick={()=>removeCharacter(character.id)} />
          :
          // * clear icon
          // * adds character gets applied with a onclick function
          <FaRegHeart className='heart-icon' onClick={() => addCharacter(character)} />
        }
    </div>
  )
}


export default CharacterCard