import { useContext } from "react"
import Actions from "../../state/Actions"
import { StateContext } from "../App"
import "./Header.css"


export default function Header() {
    const context = useContext(StateContext)
    const COLORS = ['peach', 'cofee', 'blue', 'navy']
    const THEME = context.state.theme
    
    const changeTheme = () => {
        if ('navy' !== THEME) {
            context.dispatch({ type: Actions.setTheme, payload: COLORS[COLORS.indexOf(THEME) + 1] });
        } else {
            context.dispatch({ type: Actions.setTheme, payload: COLORS[0] })
        }
    }

    return (<div className={`Header Header-${THEME}`}>
        <header className={`font-${THEME}`}>Blogs App</header>
        <button className={`form-submit-button Button-${COLORS[COLORS.indexOf(THEME) + 1]}`} onClick={changeTheme}>{THEME}</button>
    </div>)

}