import { useState } from "react";
import EducationSectionInput from "./components/cv-input/EducationSectionInput.jsx";
// import ExperienceSectionInput from './components/cv-input/ExperienceSectionInput.jsx'
import PersonalInfo from "./components/cv-input/PersonalInfo";
import PersonalInfoDisplay from "./components/cv-display/PersonalInfoDisplay";
import EducationDisplay from "./components/cv-display/EducationDisplay";
// import ExperienceDisplay from './components/cv-display/ExperienceDisplay'
import * as creators from "./components/cv-input/creatorFunctions.jsx";
import FormWindow from "./components/cv-input/formWindow.jsx";
import "./styles/App.css";

export default function GoodCvApp() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Andy",
    lastName: "Sliwinski",
    title: "personal info",
    professionalTitle: "Front-end developer",
    mobile: "123 456 789",
    email: "andy.developer@devmail.com",
    address: "Bridge Street 7, Bristol, UK",
  });

  const [education, setEducation] = useState([
    {
      ...creators.createEducationItem(),
      courseTitle: "Beng Computer Science",
      establishment: "London University",
      yearCompleted: "2010",
      description: "2.1",
    },
    {
      ...creators.createEducationItem(),
      courseTitle: "Msc Computer Science",
      establishment: "London University",
      yearCompleted: "2012",
      description: " ",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      ...creators.createExperienceItem(),
      position: "UI Designer",
      company: "Peer Inc.",
      from: "september 2011",
      to: "august 2013",
      description:
        "Design desktop applications for restaurants and car dealers.",
    },
    {
      ...creators.createExperienceItem(),
      position: "UI Senior Designer",
      company: "Peer Inc.",
      from: "september 2011",
      to: "august 2013",
      description:
        "Design desktop and mobile applications for a major corporation.",
    },
  ]);

  const [activeSectionId, setActiveSectionId] = useState(education[0].id);

  const handleEduChange = (id, entry, value) => {
    const newData = education.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          [entry]: value,
        };
      } else return item;
    });
    setEducation(newData);
  };

  const clearEducation = (id) => {
    const newData = education.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          courseTitle: "",
          establishment: "",
          yearCompleted: "",
          description: "",
        };
      } else return item;
    });
    setEducation(newData);
  };

  function addEducationSection(e) {
    e.preventDefault()
    const newEducation = [
      ...education,
      { ...creators.createEducationItem(), courseTitle: "Title" },
    ];
    setEducation(newEducation);
    console.log(newEducation)
    setActiveSectionId(newEducation[newEducation.length - 1].id);
  }

  function removeEduSection(id) {
    if (education.length < 2) {
      clearEducation(id) 
      return
    }
    
      const newEducation = education.filter( item => item.id !== id);
      setEducation(newEducation)
      if (id === activeSectionId) setActiveSectionId(education[1].id)
      
  }

  return (
    <div className="app">
      <div className="section">
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <FormWindow >
          Education
        </FormWindow>
        <EducationSectionInput
            education={education}
            onEduChange={handleEduChange}
            activeSectionId={activeSectionId}
            onClear={clearEducation}
            onAddSection={addEducationSection}
          />
      </div>
      <div className="section">
        <PersonalInfoDisplay personalInfo={personalInfo} />
        <EducationDisplay
          education={education}
          onEditClick={setActiveSectionId}
          onRemoveItem={removeEduSection}
        />
      </div>
    </div>
  );
}
