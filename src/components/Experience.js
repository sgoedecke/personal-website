import React from 'react';
import JobItem from './JobItem';

const Experience = ({ jobs }) => (
  <div className='experience section'>
    <h2>Experience</h2>
    {
      jobs.map((job, i) => (
        <JobItem key={i} job={job} />
      ))
    }
  </div>
)

export default Experience;
