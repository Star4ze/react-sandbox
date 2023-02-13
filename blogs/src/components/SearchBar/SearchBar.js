import useFilter from '../../hooks/useFilter'
import './SearchBar.scss'

export default function SearchBar(props) {
    const [filtered, setFilterd] = useFilter(props.blogs);

    const search = (e) => {
        setFilterd(e.target.value);
        props.setToShow(filtered)
    }

    return (
        <div className='SearchBar'>
            <input type='text' placeholder="Search.." onInput={(e) => search(e)} />
        </div>
    )
}