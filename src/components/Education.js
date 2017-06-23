import React from 'react';
import DegreeItem from './DegreeItem';

const Education = ({ degrees }) => (
  <div className='education section'>
    <h2>Education</h2>
    {
      degrees.map((degree, i) => (
        <DegreeItem key={i} degree={degree} />
      ))
    }
  </div>
)

export default Education;
