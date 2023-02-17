import { useContext } from "react"
import { Link } from "react-router-dom"
import Actions from "../../state/Actions"
import { StateContext } from "../App"
import "./Header.scss"


export default function Header() {
    const { state, dispatch } = useContext(StateContext)
    const COLORS = ['peach', 'cofee', 'blue', 'navy']
    const THEME = state.theme

    const changeTheme = () => {
        if ('navy' !== THEME) {
            dispatch({ type: Actions.setTheme, payload: COLORS[COLORS.indexOf(THEME) + 1] });
        } else {
            dispatch({ type: Actions.setTheme, payload: COLORS[0] })
        }
    }

    const Logout = () => dispatch({ type: Actions.logout })

    return (<div className={`Header Header-${THEME}`}>
        <header className={`font-${THEME}`}>
            <Link to='/'> Blogs App </Link>
        </header>

        {/* {state.authenticated && <button className={`form-submit-button Button-${THEME}`} onClick={Logout}>Logout</button>} */}
        {state.authenticated ? <button className={`form-submit-button Button-${COLORS[COLORS.indexOf(THEME) + 1]}`} onClick={Logout}>Logout</button> : null}
        <button className={`form-submit-button Button-${COLORS[COLORS.indexOf(THEME) + 1]}`} onClick={changeTheme}>{THEME}</button>
    </div>)

}