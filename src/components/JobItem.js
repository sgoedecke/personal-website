import React from 'react';

const JobItem = ({ job }) => (
  <div className='job-item'>
    { job.role } at { job.name }
    <br />
    { job.year }
    <br />
    <i>{ job.description}</i>
  </div>
)

export default JobItem
