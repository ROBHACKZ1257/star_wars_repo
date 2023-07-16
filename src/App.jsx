import { useEffect, useState } from 'react';
import './App.css';
import './index.css'; 

export default function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {

    let api = `https://swapi.dev/api/starships/`
    
    let response = await fetch(api)
    const starships = await response.json()

    console.log(starships.results)

    setData(starships.results)
    console.log(data)
  }

  function Starships() {
    return data.map((starship) => (
      <div className="starship" key={starship.name}>
        <h1>{starship.name}</h1>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Cost in Credits: {starship.cost_in_credits}</p>
        <p>Length: {starship.length}</p>
        <p>Crew: {starship.crew}</p>
        <p>Passengers: {starship.passengers}</p>
        <p>Cargo Capacity: {starship.cargo_capacity}</p>
        <p>Consumables: {starship.consumables}</p>
        <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
        <p>MGLT: {starship.MGLT}</p>
        <p>Starship Class: {starship.starship_class}</p>
      </div>
    ));
  }

  return (
    <div className="App">
      <h1 className="StarWars" >Star Wars Starships</h1>
      <div className="starships-container">
      <div style={{ margin: '0' }}>
    </div>
        <Starships />
      </div>
    </div>
  );
}
