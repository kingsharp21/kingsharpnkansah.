import { configureStore } from "@reduxjs/toolkit"
import inviewReducer from './inviewState'

export default configureStore({
    reducer:{
        inview: inviewReducer
    }
})
// const store = createStore()