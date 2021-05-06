export const updateCounter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENTCOUNTER":
			return state + action.payload
		case "DECREMENTCOUNTER":
			return state - action.payload
		default:
			return state
	}
}