import { useEffect } from 'react'
import './App.css'
import {fetchDataFromApi} from './utils/api'

function App() {
  const ApiTesting =async()=>{
    const response= await fetchDataFromApi('/movie/popular');
    console.log(response);
  }
  useEffect(()=>{
    ApiTesting();
  },[])
  return (
    <div className="App">
      App
    </div>
  )
}

export default App
