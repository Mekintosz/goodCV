import { useState } from 'react'
import EducationSectionInput from './components/cv-input/EducationSectionInput.jsx'
// import ExperienceSectionInput from './components/cv-input/ExperienceSectionInput.jsx'
import PersonalInfo from './components/cv-input/PersonalInfo'
import PersonalInfoDisplay from './components/cv-display/PersonalInfoDisplay'
import EducationDisplay from './components/cv-display/EducationDisplay'
// import ExperienceDisplay from './components/cv-display/ExperienceDisplay'
import './styles/App.css'

export default function GoodCvApp() {
  const [personalInfo, setPersonalInfo] = useState({
        firstName: "Andy",
        lastName: "Sliwinski",
        title: "personal info",
        professionalTitle: "Front-end developer",
        mobile: "123 456 789",
        email: "andy.developer@devmail.com",
        address: "Bridge Street 7, Bristol, UK"
      });

  const [education, setEducation] = useState(
      {
      root: [0],
      0:  {
          id: 0,
          title: "education section",
          courseTitle: "Computer Science",
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

  return (
    <>
    <div>
      <PersonalInfo
      personalInfo = {personalInfo}
      setPersonalInfo = {setPersonalInfo} 
      />
      <EducationSectionInput 
        education = {education[0]}
        setEducation = {setEducation}
      />
    </div>
      <PersonalInfoDisplay
      personalInfo = {personalInfo}
      />
      <EducationDisplay 
      education = {education[0]}
      />  
    </>
  )
}

