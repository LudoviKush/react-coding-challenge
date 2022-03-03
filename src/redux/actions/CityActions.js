import * as actions from "../constants/CityConstants";

export const sortCitiesAsc = () => (dispatch, getState) => {
  const { CityReducer } = getState();
  dispatch({ type: actions.SORT_POSTS_ASC, payload: CityReducer.posts });
};

export const sortCitiesDesc = () => (dispatch, getState) => {
  const { CityReducer } = getState();
  dispatch({ type: actions.SORT_POSTS_DESC, payload: CityReducer.posts });
};

export const searchCity = (query) => (dispatch, getState) => {
  const { CityReducer } = getState();
  //console.log(PostReducers.searchResults, "postReducers");
  if (CityReducer.searchResults.length !== 0) {
    // temp fix for 0 at first
    const searchResults = CityReducer.searchResults.data.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    );
    dispatch({ type: actions.SEARCH_POSTS, payload: searchResults });
  }
};
