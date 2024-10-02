import React from 'react';
import ReactDOM from 'react-dom/client';
import MyForms from './MyForms'; 
import './App.css';

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Character(props) {
  return <li>I am a {props.name}</li>;
}

function Fish(props) {
  return <li>I am a {props.species}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' },
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

function BlasphemousWiki() {
  const characters = [
    { id: 1, name: 'Penitent One' },
    { id: 2, name: 'Crisanta of the Wrapped Agony' },
    { id: 3, name: 'Children of Moonlight' },
  ];

  return (
    <>
      <h1>Characters in Cvstodia:</h1>
      <ul>
        {characters.map((character) => (
          <Character key={character.id} name={character.name} />
        ))}
      </ul>
    </>
  );
}

function DeepSea() {
  const fishes = [
    { id: 1, species: 'Giant isopod' },
    { id: 2, species: 'Gulper eel' },
    { id: 3, species: 'Vampire squid' },
  ];

  return (
    <>
      <h1>Animals of the Deep:</h1>
      <ul>
        {fishes.map((fish) => (
          <Fish key={fish.id} species={fish.species} />
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <Garage />
      <BlasphemousWiki />
      <DeepSea />
      <MyForms />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
