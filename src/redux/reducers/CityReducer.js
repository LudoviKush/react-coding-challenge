import * as actions from '../constants/CityConstants';

const initialState = {
	cities: [],
	searchResults: [],
	page: 1,
	city: ''
};

export const CityReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_FAV_CITY:
			return { 
				...state,
				cities: state.cities.concat(action.city)
			}
		case actions.REMOVE_FAV_CITY:
			return { 
				...state,
				cities: state.items.filter(item => action.payload !== item),
				lastUpdated: Date.now() 
			}
		case actions.SORT_CITY_ASC:
			const sortAsc = action.payload.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
			return {
				...state,
				cities: sortAsc,
			};
		case actions.SORT_CITY_DESC:
			const sortDesc = action.payload.sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0));
			console.log(action, 'action')
			return {
				...state,
				cities: sortDesc,
			};
		case actions.SEARCH_CITY:
			return {
				...state,
				cities: action.payload,
				page: 1
			};
		default:
			return state;
	}
};
