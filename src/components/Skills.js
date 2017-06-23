import React from 'react';

const Skills = ({ skills }) => (
  <div className='skills section'>
    <h2>Skills</h2>
    {
      skills.map((skill, index) => (
        <div key={index} className='skill'>
          {skill}
        </div>
      ))
    }

  </div>
)

export default Skills;
