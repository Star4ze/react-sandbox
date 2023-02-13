import { useState } from "react"

export default function useFilter(array = [], searchBy = 'title') {
    const [filtered, setFiltered] = useState(array)

    switch (searchBy) {
        case 'title':
            return [filtered, (toSearch = '') => { setFiltered(toSearch.length ? array.filter((e) => e.title.includes(toSearch)) : array) }];
        case 'author':
            return [filtered, (toSearch = '') => { setFiltered(toSearch.length ? array.filter((e) => e.author.includes(toSearch)) : array) }];
        case 'content':
            return [filtered, (toSearch = '') => { setFiltered(toSearch.length ? array.filter((e) => e.content.includes(toSearch)) : array) }];
        default:
    }
}
