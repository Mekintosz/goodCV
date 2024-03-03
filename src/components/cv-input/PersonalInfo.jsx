export default function PersonalInformationInput ({personalInfo, setPersonalInfo }) {

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setPersonalInfo((personalInfo) => (
            {
            ...personalInfo,
            [name]: value
            }
        ))
    }

    const clearPersonalInfo = () => {
        setPersonalInfo({firstName: "",
        lastName: "",
        title: "",
        professionalTitle: "",
        mobile: "",
        email: "",
        address: ""})
    }

    return (
        <form className="flex" onSubmit={clearPersonalInfo}>
            <label>First name
                <input 
                 placeholder="First name"
                 type="text"
                 name="firstName"
                 value={personalInfo.firstName}
                 onChange={handleChange}
                >
                </input>
            </label>
            <label>Surname
                <input 
                 type="text"
                 name="lastName"
                 value={personalInfo.lastName}
                 onChange={handleChange}>
                </input>
            </label>
            <label>Professional title
                <input 
                type="text"
                name="professionalTitle"
                value={personalInfo.professionalTitle}
                onChange={handleChange}
                >
                </input>
            </label>
            <label>Mobile
                <input type="text"
                name="mobile"
                value={personalInfo.mobile}
                onChange={handleChange}>
                </input>
            </label>
            <label>email
                <input type="text"
                name="email"
                value={personalInfo.email}
                onChange={handleChange}>
                </input>
            </label>
            <label>Address
                <input type="textarea"
                name="address"
                value={personalInfo.address}
                onChange={handleChange}>
                </input>
            </label>
            <div className="btn-container">
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={clearPersonalInfo}
                >
                  Clear
                </button>
              </div>
        </form>
    )
}