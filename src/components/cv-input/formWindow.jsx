import "./form-window.css"

export default function FormWindow({ children, onAddSection }) {
    return(
    <div>
        <button className="add-section-btn"
        onClick={()=> onAddSection()}>
            Add section
        </button>
        {children}
    </div>
    )
}