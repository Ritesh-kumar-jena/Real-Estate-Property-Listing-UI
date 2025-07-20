import React, { createContext, useContext, useEffect, useState } from "react";



export const ThemeContext=createContext()

const ThemeContextProvider=({children})=>{
      const [theme,setTheme]=useState(()=>{
        return localStorage.getItem("theme") || "light"
      })
      useEffect(()=>{
        const root=window.document.documentElement
        if(theme==="dark"){
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
        localStorage.setItem("theme",theme)
      },[theme])
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
    )
}



export default ThemeContextProvider;