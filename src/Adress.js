import React from 'react';
import './style.css';

export default function Adress() {
  let street = 'Warszawska',
    nr = '33';

  return (
    <div>
      <h1>Imię: {street}</h1>
      <h1>Nazwisko: {nr}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
