import React from 'react';

const Introduction = ({ name, tagline, email }) => (
  <div className='introduction section'>
    <h1>{ name }</h1>
    <div className='email'>{ email }</div>
    <i>{ tagline }</i>
  </div>
)

export default Introduction;
