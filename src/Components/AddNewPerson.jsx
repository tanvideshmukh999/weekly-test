
import React, { useState } from 'react'
import Add from './Add'
import { useContext } from 'react'
import DirectoryDataContext from '../context/DirectoryDataContext'
import TableRows from './TableRows'

const AddNewPerson = () => {
    const Directory=useContext(DirectoryDataContext);
    const [addnew,setAddNew]=useState(false);
  return (
    <div className='p-4 w-full' >
      <table className='w-full border-separate'>
        <thead>
            <tr className='p-2 border-2 border-collapse bg-blue-500 text-white'>
                <th className='table-head p-3 '>Name</th>
                <th className='table-head p-3 '>Date</th>
                <th className='table-head p-3 '>Adhaar Number</th>
                <th className='table-head p-3 '>Mobile Number</th>
                <th className='table-head p-3 '>Age</th>
                <th className='table-head p-3 '>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                Directory.data.map((person,index)=>{
                    return <TableRows key={index} {...person}/>
                })
            }
        </tbody>
      </table>
      {
        addnew?
        <Add setAddNew={setAddNew}/>:<div></div>
      }
      <button className='p-2 bg-sky-600 text-white absolute bottom-2 right-6' onClick={()=>{setAddNew(true)}}>Add</button>
    </div>
  )
}

export default AddNewPerson
