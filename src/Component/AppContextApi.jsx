import React from 'react'
import { createContext } from 'react'
export const  AppContext = createContext();
const state = {
    title: "arsaln",
    username : "arsalanTechmojo", 
    activeProfileId : "3432",
  }
function AppContextApi({children}) {
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

export default AppContextApi