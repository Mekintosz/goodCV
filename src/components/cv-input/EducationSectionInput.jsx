import './edu-sec-in.css'

export default function EducationSectionInput ({ education, onEduChange, activeSectionId, onClear }) {
  
  
    return (
        <form className="flex" onSubmit={2}>
            <label>Course
                <input 
                type="text"
                name="courseTitle"
                value={education.find(item => item.id === activeSectionId).courseTitle}
                onChange={e => onEduChange(activeSectionId, "courseTitle", e.target.value)}
                >
                </input>
            </label>
            <label>Educational Establishment
                <input 
                type="text"
                name="establishment"
                value={education.find(item => item.id === activeSectionId).establishment}
                onChange={e => onEduChange(activeSectionId, "establishment", e.target.value)}
                >
                </input>
            </label>
            <label>Year completed
                <input 
                type="text"
                name="yearCompleted"
                value={education.find(item => item.id === activeSectionId).yearCompleted}
                onChange={e => onEduChange(activeSectionId, "yearCompleted", e.target.value)}
                >
                </input>
            </label>
            <label>Description
                <textarea 
                name="description"
                value={education.find(item => item.id === activeSectionId).description}
                onChange={e => onEduChange(activeSectionId, "description", e.target.value)}
                >
                </textarea>
            </label>
            <div className="btn-container">
                <button type="submit" className="btn btn-save">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={() => onClear(activeSectionId)}
                >
                  Clear
                </button>
              </div>
        </form>
    )
}



