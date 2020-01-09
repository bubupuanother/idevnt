const stae1 = {
	data1: [],
}
export default function users(state = stae1, action) {
	switch (action.type) {
		case 'DATAONE':
			return { ...state, ...{ data1: action.payload } }
		default:
			return state
	}
}