import React from 'react';

const Interests = ({ interests }) => (
  <div className='interests section'>
    <h2>Interests</h2>
    {
      `I enjoy ${interests.slice(0, interests.length-1).join(', ')} and ${interests[interests.length-1]}`
    }

  </div>
)

export default Interests;
