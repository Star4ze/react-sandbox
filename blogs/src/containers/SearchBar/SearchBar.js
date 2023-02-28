import { useContext } from 'react'
import Actions from '../../state/Actions'
import { StateContext } from '../App'
import './SearchBar.scss'

export default function SearchBar() {
    const { dispatch } = useContext(StateContext)

    const onInput = (e) => dispatch({ type: Actions.search, payload: e.target.value })

    return (
        <div className='SearchBar'>
            <input type='text' placeholder="Search.." onInput={onInput} />
        </div>
    )
}