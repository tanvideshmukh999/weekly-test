import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import DirectoryDataContext from '../context/DirectoryDataContext';




const Add = ({setAddNew}) => {

    const [name,setName]=useState(undefined);
    const [DOB,setDob]=useState(undefined);
    const [mobileNumber,setMobileNumber]=useState(undefined);
    const [Aadhaar,setAadhar]=useState(undefined);
    const [age,setAge]=useState(0);
    const Directory=useContext(DirectoryDataContext)

    const OnSubmitData=(e)=>{
      
      const newPerson={
        name:name,
        dob:DOB,
        mobile:mobileNumber,
        aadhar:Aadhaar,
        age:age
      }
      Directory.setData([...Directory.data,newPerson ]);
      localStorage.setItem("persons",JSON.stringify([...Directory.data,newPerson ]))
      setAddNew(false);
        
    }
  return (
    <div className='p-2 w-full bg-blue-500'>
        <h1 className='text-white text-center'>Fill below form for New Entry</h1>
         {/* <table  className='w-full border-collapse border-2 border-white'> */}
        {/* <tr className='w-full object-cover'> */}
        <form className=' flex justify-evenly gap-2 flex-wrap'onSubmit={OnSubmitData}>
       <input type="text" className='border-2 border-solid  text-center  p-1  flex-grow' placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
      <input type="date" className='border-2 border-solid  text-center   p-1 flex-grow' placeholder='DOB' value={DOB} onChange={(e)=>{setDob(e.target.value)}} required/>
     <input type="number" className='border-2 border-solid  text-center   p-1 flex-grow' placeholder='aadhar number' min={100000000000}  value={Aadhaar} onChange={(e)=>{setAadhar(e.target.value)}} required/>
       <input type="number" className='border-2 border-solid  text-center  p-1 flex-grow' placeholder='mo. number' min={10000000000}  value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} required />
       <input type="number" className='border-2 border-solid  text-center  p-1 flex-grow' placeholder='age' readOnly="readonly"  value={age} onChange={(e)=>{setAge(e.target.value)}}/>
       <button type="submit" className='border-2 border-solid  text-center  p-1 bg-slate-300 flex-grow' value="save" >Save</button>
      </form>
       {/* </tr> */}
      {/* </table> */}
    </div>
  )
}

export default Add