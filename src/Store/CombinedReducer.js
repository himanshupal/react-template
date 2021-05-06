import { combineReducers } from "redux"
import { updateCounter } from "./counterReducer"

const allReducers = combineReducers({
	counter: updateCounter,
})

export default allReducers
