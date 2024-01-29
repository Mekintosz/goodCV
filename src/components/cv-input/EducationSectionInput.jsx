import { v4 as uuidv4 } from 'uuid';

export default function EducationSectionInput ({education, setEducation, activeSectionId}) {
  
  const handleChange = (e) =>{
    const { name, value } = e.target;
    setEducation((education) => (
        {...education,
          0:{
        ...education[0],
        [name]: value}
        }
      
    ))
  }

  const clearEducation = () => {
    setEducation((education) => (
      {
      ...education,
      0:{
        courseTitle: "",
        establishment: "",
        yearCompleted: "",
        description: ""}
      }
    ))
  }

    return (
        <form onSubmit={clearEducation}>
            <label>Course
                <input 
                type="text"
                name="courseTitle"
                value={education.courseTitle}
                onChange={handleChange}
                >
                </input>
            </label>
            <label>Educational Establishment
                <input 
                type="text"
                name="establishment"
                value={education.establishment}
                onChange={handleChange}
                >
                </input>
            </label>
            <label>Year completed
                <input 
                type="text"
                name="yearCompleted"
                value={education.yearCompleted}
                onChange={handleChange}
                >
                </input>
            </label>
            <label>Description
                <textarea 
                name="description"
                value={education.description}
                onChange={handleChange}
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
                  onClick={clearEducation}
                >
                  Clear
                </button>
              </div>
        </form>
    )
}



