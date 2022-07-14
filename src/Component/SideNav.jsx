import React from 'react'
import { useContext } from 'react'
import {AppContext} from "./AppContextApi"


function SideNav() {
  const {activeProfileId} = useContext(AppContext)
   return (
    <div>SideNav
      <h4>id :{activeProfileId}</h4>
    </div>
  )
}

export default SideNav