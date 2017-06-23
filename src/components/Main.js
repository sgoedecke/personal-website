import React from 'react';
import Introduction from './Introduction';
import Experience from './Experience';
import Interests from './Interests';
import Education from './Education';
import Skills from './Skills';
import sgoedecke from '../sgoedecke';
import generateResume from '../resumeGenerator';

let user = sgoedecke;
user = generateResume()

const Main = () => (
  <div>
    <Introduction name={user.name} tagline={user.tagline} email={user.email} />
    <Experience jobs={user.jobs} />
    <Education degrees={user.degrees} />
    <Skills skills={user.skills} />
    <Interests interests={user.interests} />
  </div>
)

export default Main;
