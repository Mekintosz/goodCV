export default function EducationDisplay({education}) {
   
    const educationItem = Object.values(education).map(item =>
    <li className="education-item" key={item.id}>
        <span>{item.courseTitle}</span>
        <span>{item.establishment}</span>
        <span>{item.yearCompleted}</span>
        <span>{item.description}</span>
    </li>
    );
        return (
            <ul>
              {educationItem }
            </ul>    
        )
}