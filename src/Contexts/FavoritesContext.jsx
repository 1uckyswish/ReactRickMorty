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

    //* when the page loads we need to retrive the local storage data
    useEffect(
        ()=>{
        //* check local storage to set state
        //* whatever we called the varibale to set it in local storage access that string 
        const storedFavs = localStorage.getItem('favoritesList')
        console.log('value is ',storedFavs)
        //* if data is inside the variable in local storage turn into a object
        if(storedFavs){
            //* only set if there is something in local storage
            setFavorites(JSON.parse(storedFavs))
        }

        }, []
    )
    //run when page loads
    useEffect(
        ()=>{
            //* save current state to localStorage
            //* append a name to hold object. Name it then convert the object into a string value
            //* local storage reads everyhting in string form NOT OBJECTS
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites]// runs one time //*anytime favorites changes the add to local storage
    )

    //* a function to add a character to favorite's
    const addCharacter = (charToAdd)=>{
        console.log("adding", charToAdd);
        //* i need to add the charToAdd to the favorites array
        let newFavorites = [...favorites, charToAdd]
        console.log(newFavorites)
        //* call state to append the new value to the function
        setFavorites(newFavorites)
    };

    const removeCharacter = (charId)=>{
        console.log('remove', charId)
        //* keep all the ones that dont match the id
        let newFavorites = favorites.filter(item=> item.id !== charId);
        console.log("test", newFavorites)
        setFavorites(newFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, addCharacter, removeCharacter}} >
            {props.children}
        </FavoritesContext.Provider>
    )
}
