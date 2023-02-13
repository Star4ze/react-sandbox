import { useContext } from "react"
import "./Header.css"
import { StateTheme } from "../../components/App"

export default function Header(props) {
    const theme = useContext(StateTheme)
    const colors = ['peach', 'cofee', 'blue', 'navy']   
    const changeTheme = () => {
        if ('navy' !== theme) {
            props.setTheme(colors[colors.indexOf(theme) + 1])
        } else {
            props.setTheme('peach')
        }
    }

    return (<div className={`Header Header-${theme}`}>
        <header className={`font-${theme}`}>Blogs App</header>
        <button className={`form-submit-button Button-${colors[colors.indexOf(theme) + 1]}`} onClick={changeTheme}>{theme}</button>
    </div>)

}