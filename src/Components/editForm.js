import '../App.css'
function editTodoForm(props) {
    return (
        <form className="form-todo" onSubmit={props.onSubmit}>
            <input type="text"
                value={props.onValue}
                onChange={props.onValueChange}
            />
            <button className="btn" onClick={props.onClick}>Edit</button>
        </form>
    )
}

export default editTodoForm;
