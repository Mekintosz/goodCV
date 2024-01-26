import { useState } from 'react'
import exampleCv from './components/exampleCv.js'
import EducationSectionInput from './Education'
import ExperienceSectionInput from './Experience'
import PersonalInformationInput from './PersonalInfo'
import './App.css'

export default function GoodCvApp() {
  const [personalInfo, setPersonalInfo] = useState({
        firstName: "Andy",
        lastName: "Sliwinski",
        title: "personal info",
        professionalTitle: "Front-end developer",
        mobile: "123 456 789",
        email: "andy.developer@devmail.com",
        address: "Bridge Street 7, Bristol, UK"});
  const [education, setEducation] = useState(
      {
      root: [0],
      0:  {
          id: 0,
          title: "education section",
          couresTitle: "Computer Science",
          establishment: "London University",
          yearCompleted: "2010",
          description: " "
          }
      }
  );
  const [experience, setExperience] = useState(
    {
      root: [0],
      0:{
        id: 0,
        title: "experience section",
        position: "UI Designer",
        company: "Peer Inc.",
        from: "september 2011",
        to: "august 2013",
        description: "Design desktop applications for restaurants and car dealers."
    },
    1:{
      id: 1,
      title: "experience section",
      position: "UI Senior Designer",
      company: "Peer Inc.",
      from: "september 2011",
      to: "august 2013",
      description: "Design desktop and mobile applications for a major corporation."
  },
    }
  );
  const [activeSectionId, setActiveSectionId] = useState(null);

  function handleChange() {
    setActiveSectionId(sectionId)
    const section = currentCv.sectionId
  }

  return (
    <>
        <PersonalInformationInput 
        personalInfo
        setPersonalInfo
        />
        <EducationSectionInput 
        />
        <ExperienceSectionInput />
        
    </>
  )
}

