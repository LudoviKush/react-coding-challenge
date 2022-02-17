import * as actions from '../constants/CityConstants';

const initialState = {
	cities: [],
	searchResults: [],
	page: 1,
	city: ''
};

export const CityReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SORT_CITY_ASC:
			const sortAsc = action.payload.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
			return {
				...state,
				posts: sortAsc,
			};
		case actions.SORT_CITY_DESC:
			const sortDesc = action.payload.sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0));
			return {
				...state,
				posts: sortDesc,
			};
		case actions.SEARCH_CITY:
			return {
				...state,
				posts: action.payload,
				page: 1
			};
		default:
			return state;
	}
};
