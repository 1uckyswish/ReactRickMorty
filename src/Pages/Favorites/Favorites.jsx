import React, {useContext} from 'react'
import "./Favorites.css"
import { FavoritesContext } from '../../Contexts/FavoritesContext'
import CharacterCard from '../../Components/CharacterCard/CharacterCard'

function Favorites() {
    //* This page only job is to show all the favorite characters on this page when heart is clicked
    //* get data from the context to access the global state of context
     const {favorites} = useContext(FavoritesContext)
      //* get the data array of objects from favorites and map it on this page **line 16**
  return (
    <div className='favorites-container'>
        <h1>My Favorite Characters</h1>
        <div className='favorite-characters'>
        {
          //* if the length of the array is none then display an alert 
        favorites.length > 0 ?
        favorites.map((item)=><CharacterCard key={item.id} character={item}/>)
        :
        <p>No Favorites Selected Yet</p>
        }
        </div>
    </div>
  )
}

export default Favorites