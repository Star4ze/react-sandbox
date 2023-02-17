import Actions from "../Actions";
import { initialState } from "../initialState";


export default function stateReducer(state, action) {
    switch (action.type) {
        case (Actions.login):
            return { ...state, authenticated: true }
        case (Actions.logout):
            return { ...state, authenticated: false }
        case (Actions.setTheme):
            return { ...state, theme: action.payload }
        case (Actions.setToBlogs):
            return { ...state, blogs: action.payload }
        case (Actions.addToBlogs):
            return { ...state, blogs: [...state.blogs, action.payload] }
        case (Actions.search):
            return { ...state, searchResults: [(action.payload.length ? state.blogs.filter((e) => e.title.includes(action.payload)) : state.blogs)] }

        default:
            return initialState

    }

}