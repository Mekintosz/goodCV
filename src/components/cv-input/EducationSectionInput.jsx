

export default function EducationSectionInput (props) {
    return (
        <form onSubmit={}>
            <label>Course
                <input type="text">
                </input>
            </label>
            <label>Educational Establishment
                <input type="text">
                </input>
            </label>
            <label>Year completed
                <input type="text">
                </input>
            </label>
            <label>Description
                <textarea >
                </textarea>
            </label>
            <div className="btn-container">
                <button type="submit" className="btn btn-save">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={}
                >
                  Delete
                </button>
              </div>
        </form>
    )
}



