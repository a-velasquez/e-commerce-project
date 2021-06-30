import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS
} from '../actions'

const filter_reducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		return {
			...state,
			// spread operator lets us set all_products and filtered_products to same state without errors
			all_producst: [...action.payload],
			filtered_products: [...action.payload]
		}
	}
	return state
	throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
