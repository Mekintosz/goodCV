export default function PersonalInfoDisplay({education}) {
    return (
        <div>
            <p className="education-paragraph">{education.courseTitle}</p>
            <p className="education-paragraph">{education.establishment}</p>
            <p className="education-paragraph">{education.yearCompleted}</p>
            <p className="education-paragraph">{education.description}</p>
        </div>    
    )
}