import './ShowToDo.css';

function ShowToDo(props) {
    let sortTask = [];
    for (let i = 5; i > 0; i--) {
        sortTask = [...sortTask, ...props.todos.filter(t => t.prio === i)];
    }

    return (
        <div className='ShowToDo'>
            <ul>
                {sortTask.map((t, i) =>
                    <li key={i}>
                        <span>{t.task}</span>
                        <span>{t.date}</span>
                        <span>{t.prio}</span>
                        <button onClick={() => props.remove(i)} className='form-submit-button'>Done</button>
                    </li>)}
            </ul>
        </div>
    );
}

export default ShowToDo;
