import React from 'react'
import SideNav from './SideNav'
import Main from "./Main"
import { AppContext } from './AppContextApi'
import { useContext } from 'react'

function Dashboard() {
    const {title,username, activeProfileId}  = useContext(AppContext)
  return (
    <div>Dashboard
        <p>title :{title}</p>
            <p>username:{username}</p>
            <p> activeProfileId : {activeProfileId }</p>   
        <SideNav/>
        <Main/>
    </div>
  )
}

export default Dashboard