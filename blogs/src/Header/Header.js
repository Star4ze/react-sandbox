import "./Header.css"

export default function Header(props) {
    const colors = ['peach', 'cofee', 'blue', 'navy']
    const changeTheme = () => {
        if ('navy' !== props.theme) {
            props.setTheme(colors[colors.indexOf(props.theme) + 1])
        } else {
            props.setTheme('peach')
        }
    }

    return (<div className={`Header Header-${props.theme}`}>
        <header className={`font-${props.theme}`}>Blogs App</header>
        <button className={`form-submit-button Button-${colors[colors.indexOf(props.theme) + 1]}`} onClick={changeTheme}>{props.theme}</button>
    </div>)

}