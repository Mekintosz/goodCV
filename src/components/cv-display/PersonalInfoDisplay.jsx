export default function PersonalInfoDisplay({personalInfo}) {
    return (
        <div>
            <p className="info-paragraph">{personalInfo.firstName}</p>
            <p className="info-paragraph">{personalInfo.lastName}</p>
            <p className="info-paragraph">{personalInfo.professionalTitle}</p>
            <p className="info-paragraph">{personalInfo.mobile}</p>
            <p className="info-paragraph">{personalInfo.email}</p>
            <p className="info-paragraph">{personalInfo.address}</p>
        </div>
    )
}