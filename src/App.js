
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import AddNewPerson from './Components/AddNewPerson';
import RetrivedData from './Components/RetrivedData';
import DirectoryData from './context/DirectoryData';
 import { useState } from 'react';


function App() {
  const [Addperson,setAddPerson]=useState(true);

  const addPersonTab=()=>{
    setAddPerson(true);
  }

  const retrivePersonTab=()=>{
    setAddPerson(false);
  }
  return (
    <div className="App">
   <DirectoryData>
   <Header/>
   <button className='p-2 bg-sky-600 text-white m-2 ' onClick={addPersonTab}>Add person</button>
   <button className='p-2 bg-sky-600 text-white m-2' onClick={retrivePersonTab}>retrive Data</button>
   <div className='p-2 border-2 border-solid border-gray-500 relative min-h-72 m-4'>
   {
    Addperson? <AddNewPerson/>:
    <RetrivedData/>
   }
   </div>
   </DirectoryData>
    </div>
  );
}

export default App;
