
import React from 'react'
import { useContext } from 'react'
import DirectoryDataContext from '../context/DirectoryDataContext'

const TableRows = (props) => {
    const Directory=useContext(DirectoryDataContext)
    const OnDelete=()=>{
         const newData =Directory.data.filter((person)=>person.mobile!=props.mobile);
          Directory.setData([...newData]);
          localStorage.setItem("persons",JSON.stringify([...newData]));
    }
  return (
   <tr>
      <td className='text-center'>{props.name}</td>
      <td className='text-center'>{props.dob}</td>
      <td className='text-center'>{props.aadhar}</td>
      <td className='text-center'>{props.mobile}</td>
      <td className='text-center'>{props.age}</td>
      <td className='text-center'><button onClick={OnDelete}>delete</button></td>
   </tr>
  )
}

export default TableRows
