import React from 'react'
import TopNAv from './TopNAv'
import Page from "./Page"
import { AppContext } from './AppContextApi'
import { useContext } from 'react'

function Main() {
    const {title, username} = useContext(AppContext)
  return (
    <div>Main
        <h5 > title : {title}</h5>
        <h5> username :{ username}</h5>
        <TopNAv/>
        <Page/>
    </div>
  )
}

export default Main