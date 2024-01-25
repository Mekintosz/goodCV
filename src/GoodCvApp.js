import { useState } from 'react'
import exampleCv from './components/exampleCv.js'
import CvDataInput from './components/cv-input/CvDataInput.js'
import CvDisplay from './components/cv-display/CvDisplay.js'
import './App.css'

export default function GoodCvApp() {
  const [currentCv, setCurrentCv] = useState(exampleCv);

  function handleAddEntry(sectionId) {
    const section = currentCv.sectionId
  }

  return (
    <>
        <CvDataInput />
        <CvDisplay />
    </>
  )
}

