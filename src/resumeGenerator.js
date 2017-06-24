import faker from 'faker';
import sample from 'lodash/sample';
import times from 'lodash/times';
import remove from 'lodash/remove';

const generateResume = () => ({
  name: faker.fake("{{name.firstName}} {{name.lastName}}"),
  tagline: `${tagLineFlair()} ${faker.hacker.ingverb()} ${faker.hacker.adjective()} ${faker.hacker.noun()}s`,
  email: faker.internet.email().toLowerCase(),
  jobs: [
    generateJob(), generateJob()
  ],
  skills:  selectMultiple(getSkills, 4),
  interests: selectMultiple(getHobbies, 5),
  degrees: [
    {
      type: `${degreeType()} in ${degreeTopic()}`,
      institution: `${faker.address.state()} University`,
      year: '2016'
    }
  ]
})

export default generateResume;


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

// ensure we don't have duplicates in lists where that would look bad
// (e.g skills, hobbies)
const selectMultiple = (getList, num) => {
  const result = []
  let tempList = getList()
  times(num, () => {
    let tempResult = sample(tempList)
    remove(tempList, (res) => (res == tempResult))
    result.push(tempResult)
  })
  return result
}


const getHobbies = () => ([
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

const getSkills = () => ([
  faker.hacker.abbreviation(),
  faker.hacker.abbreviation() + '.js',
  'Cloud ' + faker.hacker.abbreviation(),
  'React',
  'Ruby on Rails',
  'Django',
  'Docker',
  'Kubernetes'
])
