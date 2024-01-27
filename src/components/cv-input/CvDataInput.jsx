import EducationSectionInput from './Education'
import ExperienceSectionInput from './Experience'
import PersonalInformationInput from './PersonalInfo'


export default function CvDataInput() {
    return (
        <>
        <div>
        <PersonalInformationInput />
        <EducationSectionInput />
        <ExperienceSectionInput />
        </div>
        <div>
            <PersonalInfoDisplay />
            <EducationDisplay />
            <ExperienceDisplay />
        </div>
        </>
        
    )
}