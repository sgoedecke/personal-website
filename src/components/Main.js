import React from 'react';
import Introduction from './Introduction';
import Experience from './Experience';
import Interests from './Interests';
import Education from './Education';
import Skills from './Skills';
import sgoedecke from '../sgoedecke';
import generateResume from '../resumeGenerator';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      user: sgoedecke
    }
  }
 render() {
    return (
      <div>
        <div className='topbar'>
          <div href='#' className='randomize' onClick={() =>
            this.setState({ user: generateResume() })
          }>Randomize</div>
        </div>
        <Resume user={this.state.user} />
      </div>
    )
  }
}

const Resume = ({ user }) => (
  <div>
    <Introduction name={user.name} tagline={user.tagline} email={user.email} />
    <Experience jobs={user.jobs} />
    <Education degrees={user.degrees} />
    <Skills skills={user.skills} />
    <Interests interests={user.interests} />
  </div>
)

export default Main;
