import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Listpokimon from './component/Listpokimon';


function App() {
  const [pokimoon, setPokimon] = useState([])
  useEffect(() => {
    funcPokimon()
  })
  async function funcPokimon(offset = 6, limit = 6) {
    const pokimon = await axios.get('https://pokeapi.co/api/v2/pokemon/', {
      params:{
        _offset: offset,
        _limit: limit,
      }
    })
    setPokimon(pokimon.data.results)
  }

  return (
    <div className="App">
      <div>
        <Listpokimon pokimon={pokimoon}/>
      </div>
    </div>
  )
}
export default App;
