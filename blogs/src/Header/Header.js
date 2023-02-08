import "./Header.css"

export default function Header(props) {
    //https://colorhunt.co/palette/ffd4d4ffffe8cde990aacb73 peach
    //https://colorhunt.co/palette/7286d38ea7e9e5e0fffff2f2 blue
    //https://colorhunt.co/palette/5671897b8fa1cfb997fad6a5 navy
    const colors = ['peach', 'cofee', 'blue', 'navy']
    const changeTheme = () => {        
        if ('navy' !== props.theme) {
            props.setTheme(colors[colors.indexOf(props.theme) + 1])
        } else {
            props.setTheme('peach')
        }
    }

    return (<div className={`Header Header-${props.theme}`}>
        <header>Blogs App</header>
        <button className={`form-submit-button Button-${colors[colors.indexOf(props.theme) + 1]}`} onClick={changeTheme}>{props.theme}</button>
    </div>)

}