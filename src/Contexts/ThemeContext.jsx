import { useState, createContext, useEffect} from "react";
// create a context

export const ThemeContext = createContext()

export default function ThemeContextProvider(props){
    //create state
    const [darkMode, setDarkMode] = useState(false);


    useEffect(
        ()=>{
        //* check local storage to set state
        const storedDarkMode = localStorage.getItem('darkMode')
        console.log('value is ',storedDarkMode)
        if(storedDarkMode){
            //* only set if there is something in local storage
            setDarkMode(JSON.parse(storedDarkMode))
        }
        
        }, []
    )
    //run when page loads
    useEffect(
        ()=>{
            console.log('darkMode is', darkMode)
            //save current state to localStorage
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        },[darkMode]// runs one time
    )

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}} >
            {props.children}
        </ThemeContext.Provider>
    )
}
