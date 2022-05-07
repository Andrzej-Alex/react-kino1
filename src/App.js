import React from 'react';
import './style.css';
import Adress from './Adress.js';

export default function App() {
  let name = 'Ala',
    surname = 'Zizitop';

  return (
    <div>
      <h1>Imię: {name}</h1>
      <h1>Nazwisko: {surname}</h1>
      <p>Start editing to see some magic happen :)</p>
      <Adress />
    </div>
  );
}
