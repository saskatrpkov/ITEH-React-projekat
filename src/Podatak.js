import React from 'react';
import './Podatak.css';
export default function Podatak({ naziv, vrednost }) {
  return (
    <div className='red'>
      <b>{naziv}:</b>
      {vrednost}
    </div>
  );
}
