import React, { useEffect, useState, useContext} from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import { ThemeContext } from '../../Contexts/ThemeContext';

function Episodes() {
  // when page loads create a dropdown UI
  //create state for eipisode numbers
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1)
  const [selectedEpisode, setSelectedEpisode] = useState([])
  const [characterList, setCharacterList] = useState([]);

  const {darkMode} = useContext(ThemeContext);

  useEffect(
    ()=>{
      // make aou call to find how many episiodes
      axios.get(`https://rickandmortyapi.com/api/episode`)
      .then((result) =>{
        const newOptions = []
        for(let i = 1; i <= result.data.info.count; i++){
          newOptions.push(i)
        }
        setOptions(newOptions);
      })
      .catch(err =>  console(err))
    }, []
  )

  useEffect(
    ()=>{
      console.log(selectedOption);
      //need to get data from this episode 
      //https://rickandmortyapi.com/api/episode/28
      // make an api call for each episode
      //use async
      // async func returns a promise
      const fetchEpisodeData = async () =>{
        try{
          // get specific episode date
          const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
          console.log(res.data)
          setSelectedEpisode(res.data)
          // res.data.characters is array with all characters
          //endpoints for characters in this episode
          const episodeCharacters = await Promise.all(
            res.data.characters.map(url => {
              return axios.get(url).then(res => res.data)
            })
          )
           setCharacterList(episodeCharacters);
        }
        catch(err){
          console.log(err)
        }
      }
      //remember to call it 
      fetchEpisodeData()
    }, [selectedOption]
  )

  // create a function to call when i select a episode

  const handleSelectChange = (e)=>{
    // console.log(e.target.value)
    //save this value in sate
    setSelectedOption(e.target.value);
  }

  return (
    <div className={darkMode?'episodes-container episodes-dark':'episodes-container'}>
      <div>
        <label>Select an Episode</label>
        <select id='select-episode' onChange={handleSelectChange}>
          {
            options.map((number) => <option key={number} value={number}> Episode {number}</option>)
          }
        </select>
      </div>
      <div>
        <div className='episode-info'>
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className='character-container'>
          {
            characterList.map(item =><CharacterCard key={item.id} character={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Episodes