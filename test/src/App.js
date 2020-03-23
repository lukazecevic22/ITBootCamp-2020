import React, { useState } from 'react';
import './App.css';
import Container from './Container'
import noviRadnik from './services/Services'
// import { noviRadnik } from './services/Services.js'

function App() {

  const [inpRadnik, setInpRadnik] = useState('')
  const [inpPlata, setInpPlata] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inpRadnik === '' || inpPlata === '') {
      alert("mora nesto")
    } else {

      noviRadnik(inpRadnik, inpPlata).then(res => console.log(res))
    }

    const handleInput1 = (e) => {
      setInpRadnik(e.target.value)
      console.log(inpRadnik);
    }
    const handleInput2 = (e) => {
      setInpPlata(e.target.value)
    }

    return (
      <div>
        <Container />
        <form onSubmit={e => (handleSubmit(e))}>
          <input type='text' placeholder='ime radnika' onChange={e => (handleInput1(e))}></input>
          <input type='number' placeholder='iznos plate' onChange={e => (handleInput2(e))}></input>
          <input type='submit' value='Unos'></input>
        </form>
        
  </div>
    );
}
}
export default App;
