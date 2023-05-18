import React, { useState}from 'react'
import "./Search.css"
import axios from 'axios';

function Search({setCharacters}) {
    // i need to get the input from the textbox
    //where will i put it? create state
    const [query, setQuery] = useState('');
    // api - https://rickandmortyapi.com/api/character/?name=beth
    const handleSubmit = (e) =>{
        //stop the page from refreshing
        e.preventDefault();
        console.log(query);
        // i need to make api call to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res => setCharacters(res.data.results))
        .catch(err =>{
            if(err.response.status === 404){
                alert(`No Results for ${query}`)
            }else{
                console.log(err);
            }
        })
        //clear textbox
        setQuery('');

    };

  return (
    <form className='search-container' onSubmit={handleSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search Character'/>
    </form>
  )
}

export default Search