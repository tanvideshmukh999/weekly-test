import React, { useState } from 'react'
import DirectoryDataContext from './DirectoryDataContext'

const DirectoryData = (props) => {
   console.log(JSON.parse(localStorage.getItem("persons")))
    const [data,setData]=useState(JSON.parse(localStorage.getItem("persons"))?[...JSON.parse(localStorage.getItem("persons"))]:[]);
    
  return (
    <DirectoryDataContext.Provider value={{data,setData}}>
      {props.children}
    </DirectoryDataContext.Provider>
  )
}

export default DirectoryData