import faker from 'faker';
import sample from 'lodash/sample';

const generateResume = () => ({
  name: faker.fake("{{name.firstName}} {{name.lastName}}"),
  tagline: `${tagLineFlair()} ${faker.company.catchPhrase().toLowerCase()}`,
  email: faker.internet.email().toLowerCase(),
  jobs: [
    generateJob(), generateJob()
  ],
  skills: [
    skill(),
    skill(),
    skill(),
    skill(),
    skill()
  ],
  interests: [
    hobby(), hobby(), hobby()
  ],
  degrees: [
    {
      type: `${degreeType()} in ${degreeTopic()}`,
      institution: `${faker.address.state()} University`,
      year: '2016'
    }
  ]
})

const degreeType = () => (
  sample([
    'MA',
    'BA',
    'PhD'
  ])
)

const degreeTopic = () => (
  sample([
    'Computer Science',
    'IT',
    'Philosophy',
    'Cloud Systems'
  ])
)

const generateJob = () => ({
  role: sample([`${jobNoun()} ${jobVerb()}`, faker.name.jobTitle()]),
  name: faker.company.companyName(),
  year: '2016',
  description: `${jobFlair()} ${faker.company.catchPhrase().toLowerCase()}`
})

const tagLineFlair = () => (
  sample([
    'I live for',
    'I build',
    'Focused on',
    'I hack on'
  ])
)

const jobFlair = () => (
  sample([
    'I managed the',
    'I built the',
    'I developed a',
    'I led a team to build a'
  ])
)

const jobVerb = () => (
  sample([
    'Hacker',
    'Ninja',
    'Engineer',
    'Coder',
  ])
)

const skill = () => (
  sample([
    faker.hacker.abbreviation(),
    faker.hacker.abbreviation() + '.js',
    'Cloud ' + faker.hacker.abbreviation(),
    'React',
    'Ruby on Rails',
    'Django',
    'Docker',
    'Kubernetes'
  ])
)

const jobNoun = () => (
  sample([
    'Growth',
    'Frontend',
    'Backend',
    'FullStack',
    'DevOps',
    'UXD'
  ])
)

const hobby = () => (
  sample([
    'hiking',
    'coffee',
    'reading',
    'swimming',
    'triathlons',
    'hackathons',
    'craft beer',
    'local theatre',
    'volunteering at soup kitchens',
    'patting dogs'
  ])
)

export default generateResume;
