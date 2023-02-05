import { useState } from "react";
import './AddToDo.css';

function AddToDo(props) {
    const [inputTask, setInputTask] = useState('');
    const [inputDate, setInputDate] = useState('no data');
    const [inputPrio, setInputPrio] = useState(5);

    const onSubmit = e => {
        e.preventDefault();
        props.addTodo({ task: inputTask, date: inputDate, prio: parseInt(inputPrio) });
    };
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onInput={e => setInputTask(e.target.value)} />
            <input type="date" onInput={e => setInputDate(e.target.value)} />
            <input type="range" min='1' max='5' onInput={e => setInputPrio(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
    )

}

export default AddToDo;