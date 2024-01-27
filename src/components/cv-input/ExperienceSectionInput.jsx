export default function ExperienceSectionInput (props) {
    return (
        <form onSubmit={}>
            <label>Position
                <input type="text">
                </input>
            </label>
            <label>Company
                <input type="text">
                </input>
            </label>
            <label>From
                <input type="text">
                </input>
            </label>
            <label>To
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