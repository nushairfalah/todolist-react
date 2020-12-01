import '../App.css'

function editTodoForm(props) {
    console.log(props, 'props')
    return (
        <div>
            <h1>Bucket List</h1>
            <form className="form-todo" onSubmit={props.onSubmit}>
                <input type="text"
                    value={props.onValue}
                    onChange={props.editChange}
                />
                <button className="btn" onClick={props.onClick}>Edit</button>
            </form>
            <br />
            <br />
        </div>
    )
}

export default editTodoForm;
