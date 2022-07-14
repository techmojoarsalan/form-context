import React from 'react'
import Profile from './Profile'
import { AppContext } from './AppContextApi'
import { useContext } from 'react'

function Page() {
  const {username} = useContext(AppContext);
  return (
    <div>Page
      <h5>username :  {username}</h5>
      
        <Profile/>
    </div>
  )
}

export default Page