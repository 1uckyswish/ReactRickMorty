import { useState, createContext, useEffect} from "react";
// create a context

export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props){
    //*create state to hold favorites
    const [favorites, setFavorites] = useState([]);
    //** the favorites is going to be an array of objects when things get added */
    // ** when heart is clicked it is adding it to the favorites and also removed when clicked again
    //** we have to make a function to add and remove favorites on a onclick */

console.log("new", favorites)


    // useEffect(
    //     ()=>{
    //     //* check local storage to set state
    //     const storedDarkMode = localStorage.getItem('darkMode')
    //     console.log('value is ',storedDarkMode)
    //     if(storedDarkMode){
    //         //* only set if there is something in local storage
    //         setDarkMode(JSON.parse(storedDarkMode))
    //     }

    //     }, []
    // )
    // //run when page loads
    // useEffect(
    //     ()=>{
    //         console.log('darkMode is', darkMode)
    //         //save current state to localStorage
    //         localStorage.setItem('darkMode', JSON.stringify(darkMode))
    //     },[darkMode]// runs one time
    // )

    //* a function to add a character to favorite's
    const addCharacter = (charToAdd)=>{
        console.log("adding", charToAdd);
        //* i need to add the charToAdd to the favorites array
        let newFavorites = [...favorites, charToAdd]
        console.log(newFavorites)
        //* call state to append the new value to the function
        setFavorites(newFavorites)

    };

    return(
        <FavoritesContext.Provider value={{favorites, addCharacter}} >
            {props.children}
        </FavoritesContext.Provider>
    )
}
