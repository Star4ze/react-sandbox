import { useState } from "react";
import './AddToDo.css';

function AddToDo(props) {
    const [inputTask, setInputTask] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputPrio, setInputPrio] = useState(3);

    const onSubmit = e => {
        e.preventDefault();
        props.addTodo({ task: inputTask, date: inputDate, prio: parseInt(inputPrio) });
        setInputTask('');
        setInputDate('');
        setInputPrio(3);
    };
    
    return (
        <form onSubmit={onSubmit} className='addToDo'>
            <div>
                <div>
                    <label htmlFor='task'>Task :</label>
                    <label htmlFor='date'>Due Date :</label>
                    <label htmlFor='prio'>Priority :</label>
                </div>
                <div>
                    <input type="text" id='task' value={inputTask} onInput={e => setInputTask(e.target.value)} />
                    <input type="date" id='date' value={inputDate} onInput={e => setInputDate(e.target.value)} />
                    <input type="range" id='prio' value={inputPrio} min='1' max='5' onInput={e => setInputPrio(e.target.value)} />
                </div>
            </div>
            <input type="submit" value="Add" className="form-submit-button" />
        </form>
    )

}

export default AddToDo;