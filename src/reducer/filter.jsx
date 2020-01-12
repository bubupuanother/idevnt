const statee = {
	filterdata: [],
}
export default function users(state = statee, action) {
	switch (action.type) {
		case 'FILTER':
			return {...state,...{filterdata: action.payload}}
		default:
			return state
	}
}