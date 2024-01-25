export default function PersonalInformationInput (props) {
    return (
        <form onSubmit={}>
            <label>First name
                <input type="text">
                </input>
            </label>
            <label>Surname
                <input type="text">
                </input>
            </label>
            <label>Profesional title
                <input type="text">
                </input>
            </label>
            <label>Mobile
                <input type="text">
                </input>
            </label>
            <label>email
                <input type="text">
                </input>
            </label>
            <label>Address
                <input type="text">
                </input>
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