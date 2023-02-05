import './ShowToDo.css'

function ShowToDo(props) {
    // let sortTask = []
    // for (let i = 5; i > 0; i--) {       
    //     sortTask.concat(props.todos.filter(t => t.prio === i))  
    // }
   
    return (
        <ul>
            {props.todos.map((t, i) =>
                <li key={i}>
                    <span>{t.task}</span>
                    <span>{t.date}</span>
                    <span>{t.prio}</span>
                    <button onClick={() => props.done(t.task)}>Done</button>  {/* y? */}
                </li>)}
        </ul>
    );

}

export default ShowToDo;