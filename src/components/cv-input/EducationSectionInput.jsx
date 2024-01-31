import './edu-sec-in.css'

export default function EducationSectionInput ({ education, onEduChange, activeSectionId, onClear }) {
  
  
    return (
        <form className="flex" onSubmit={2}>
            <label>Course
                <input 
                type="text"
                name="courseTitle"
                value={education[0].courseTitle}
                onChange={e => onEduChange(education[0].id, "courseTitle", e.target.value)}
                >
                </input>
            </label>
            <label>Educational Establishment
                <input 
                type="text"
                name="establishment"
                value={education[0].establishment}
                onChange={e => onEduChange(education[0].id, "establishment", e.target.value)}
                >
                </input>
            </label>
            <label>Year completed
                <input 
                type="text"
                name="yearCompleted"
                value={education[0].yearCompleted}
                onChange={e => onEduChange(education[0].id, "yearCompleted", e.target.value)}
                >
                </input>
            </label>
            <label>Description
                <textarea 
                name="description"
                value={education[0].description}
                onChange={e => onEduChange(education[0].id, "description", e.target.value)}
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



