export const increment = (value) => {
	return {
		type: "INCREMENTCOUNTER",
		payload: value,
	}
}
export const decrement = (value) => {
	return {
		type: "DECREMENTCOUNTER",
		payload: value,
	}
}
