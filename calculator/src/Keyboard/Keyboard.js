import { useState } from "react";

function Keyboard(props) {
    const [error, setError] = useState('')
    const [num, setNum] = useState('')
    const [op, setOp] = useState('')

    let isInit = true
    let ops = ['/', '*', '-', '+']

    const setinginput = e => {
        setError("")
        if (ops.includes((e.target.value))) {
            if (ops.includes(props.inputs[props.inputs.length - 1]))
                setError("Wrong Format")
            else {
                isInit = false
                setOp(e.target.value)
                setNum('')
                props.setInputs([...props.inputs, e.target.value])
            }
        }
        else {
            console.log(num, props.ans, e.target.value);


            setNum(num + e.target.value)
            if (isInit)
                props.setAns(parseInt(num))
            props.setInputs([...props.inputs, e.target.value])

            console.log(num, parseInt(num), e.target.value);
        }
    }

    const cal = () => {
        console.log(props.ans, op, num);
        switch (op) {
            case '+':
                props.setInputs(props.ans + parseInt(num));
                break;
            case '-':
                props.setInputs(props.ans - parseInt(num));
                break;
            case '*':
                props.setInputs(props.ans * parseInt(num));
                break;
            case '/':
                props.setInputs(props.ans / parseInt(num));
                break;
            default:
        }

    }


    return (
        <div>
            <div> {[...Array(3)].map((_, i) => <button key={i} onClick={(e) => setinginput(e)} value={i} >{i}</button>)} </div>
            <div> {[...Array(3)].map((_, i) => <button key={i + 3} onClick={(e) => setinginput(e)} value={i + 3}> {i + 3} </button>)} </div>
            <div> {[...Array(4)].map((_, i) => <button key={i + 6} onClick={(e) => setinginput(e)} value={i + 6}> {i + 6} </button>)} </div>
            <div>
                {ops.map(i => <button key={i} onClick={(e) => setinginput(e)} value={i}>{i}</button>)}
                <button onClick={() => cal()}>=</button>
            </div>
            <span>{error}</span>
        </div>
    )

}

export default Keyboard;




