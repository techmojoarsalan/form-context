import React from 'react'
import { AppContext } from './AppContextApi'
import { useContext } from 'react'

function TopNAv() {
  const {title} = useContext(AppContext)
  return (
    <div>
      TopNAv
    <h4>title:{ title}</h4>
      </div>
  )
}

export default TopNAv