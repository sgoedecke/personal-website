import React from 'react';

const DegreeItem = ({ degree }) => (
  <div className='degree-item'>
    { degree.institution }
    <br />
    <i>{ degree.type }</i>
    <br />
    Completed in { degree.year }
  </div>
)

export default DegreeItem
