import { useEffect, useState } from 'react'
import axios from 'axios'

const DisplayCountry = ({result}) => {
  const keys = Object.keys(result.languages)
  
  return(
    <div>
      <div>
          <h1>{result.name.common}</h1>
          <p>{result.capital[0]}</p>
          <p>{result.area}</p>
          <b>languages:</b>
          <ul>
              {keys.map(keys => <li>{result.languages[keys]}</li>)}
          </ul>
          <img src={result.flags.png} aspect-ratio='1' width='250'/> 
      </div>
    </div>
  )
}

const Results = ({result}) => {
  const [show, setShow] = useState(false)

  const handleClick= () => {
    setShow(!show)
  }

  return (
    <li>
      {result.name.common} <button onClick={handleClick}>show</button>
      {show === true && <DisplayCountry key={result.name.common} result={result} />}
    </li>
  )  
}

const Search = ({country, result}) => {

  let filtered = []

  if(country.length > 0){
      filtered = result.filter(result => 
      result.name.common.toLowerCase().includes(country.toLowerCase()))
  } else {
      filtered = result
  }

  if(filtered.length > 10 ){
    return ('Too many matches, specify another filter')
  } else if (filtered.length === 1) {
    return (filtered.map(result => <DisplayCountry key={result.name.common} result={result}/>))
  } else {
    return (filtered.map(result => <Results key={result.name.common} result={result} />))
  } 
}


const App = () => {
  const[country, setCountry] = useState('')
  const[result, setResult] = useState([])
 
  useEffect(() => {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
          setResult(response.data)
        })
  }, [])
  

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  
  return (
    <div>
      <form>
        find countries <input value={country} onChange={handleCountryChange} />
      </form>
      <div>
        <Search key={result.id} result={result} country={country} />
      </div>
    </div>
  )
}

export default App;