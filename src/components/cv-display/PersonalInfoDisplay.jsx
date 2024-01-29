export default function PersonalInfoDisplay({personalInfo}) {
    return (
        <div>
            <h1 className="info-paragraph">{personalInfo.firstName +" "+ personalInfo.lastName}</h1>
            
            <p className="info-paragraph">{personalInfo.professionalTitle}</p>
            <p className="info-paragraph">{personalInfo.mobile}</p>
            <p className="info-paragraph">{personalInfo.email}</p>
            <p className="info-paragraph">{personalInfo.address}</p>
        </div>
    )
}