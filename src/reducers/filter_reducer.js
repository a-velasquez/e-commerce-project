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
		let maxPrice = action.payload.map((p) => p.price)
		// can't pass array in directly, ...
		maxPrice = Math.max(...maxPrice)
		return {
			...state,
			// spread operator lets us set all_products and filtered_products to same state without errors
			all_products: [...action.payload],
			filtered_products: [...action.payload],
			filters: { ...state.filters, max_price: maxPrice, price: maxPrice }
		}
	}
	if (action.type === SET_GRIDVIEW) {
		return { ...state, grid_view: true }
	}
	if (action.type === SET_LISTVIEW) {
		return { ...state, grid_view: false }
	}
	if (action.type === UPDATE_SORT) {
		return { ...state, sort: action.payload }
	}
	if (action.type === SORT_PRODUCTS) {
		const { sort, filtered_products } = state
		// [...filtered_products] in case of no matching value
		let tempProducts = [...filtered_products]
		// long way - same as implicit return below
		if (sort === 'price-lowest') {
			tempProducts = tempProducts.sort((a, b) => {
				if (a.price < b.price) {
					return -1
				}
				if (a.price > b.price) {
					return 1
				}
				return 0
			})
		}
		if (sort === 'price-highest') {
			tempProducts = tempProducts.sort((a, b) => b.price - a.price)
		}
		if (sort === 'name-a') {
			tempProducts = filtered_products.sort((a, b) => {
				return a.name.localeCompare(b.name)
			})
		}
		if (sort === 'name-z') {
			tempProducts = filtered_products.sort((a, b) => {
				return b.name.localeCompare(a.name)
			})
		}
		return { ...state, filtered_products: tempProducts }
	}
	throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
