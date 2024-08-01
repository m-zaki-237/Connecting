import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  const [jokes , setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])


  return (
    <>
    <h1>Code with me and have Tea</h1>
    <p className='serial'>JOKES : {jokes.length}</p>
    {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h3 className='serial'>{joke.title}</h3>
          <p className='serial'>{joke.joke}</p>
        </div>
      ))
    }
    </>
  );
}

export default App;
