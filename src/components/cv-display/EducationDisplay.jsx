export default function EducationDisplay({ education, onEditClick, onRemoveItem }) {
   
    const educationItem = education.map(item =>
    <li className="education-item" key={item.id}>
        <span>{item.courseTitle}</span>
        <span>{item.establishment}</span>
        <span>{item.yearCompleted}</span>
        <span>{item.description}</span>
        <button type="button" onClick={() => onEditClick(item.id)}>edit</button>
        <button type="button" onClick={() => onRemoveItem(item.id)}>remove</button>
    </li>
    
    );
        return (
            <ul>
              {educationItem}
            </ul>    
        )
}