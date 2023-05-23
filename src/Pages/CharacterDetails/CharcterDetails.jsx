import React, {useState} from 'react'
import "./CharacterDetails.css"
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CharcterDetails() {
    //this page shows the details of a specific charcter
    //how do i know which one?
    // the ID is in the url
    //create state to hold data
    const [singleCharacter, setSingle] = useState('');
    const {characterId} = useParams()
    //https://rickandmortyapi.com/api/character/5
    //get the data from api when page loads
    React.useEffect(
        ()=>{
            //make api call to get charcter data.
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((result)=>{
                console.log(result.data);
                //what do i do with this data? set it to state ;}
                setSingle(result.data)
            })
            .catch(err => console.log(err))
        }, []//runs when page loads
    )

  return (
    <div className='details-container'>
        <img src={singleCharacter?.image} />
       <div className='container-info'>
        <p>Name: {singleCharacter?.name}</p>
        <p>Gender: {singleCharacter?.gender}</p>
        <p>Location: {singleCharacter?.location?.name}</p>
        <p>Species: {singleCharacter?.species}</p>
       </div>
    </div>
  )
}

export default CharcterDetails