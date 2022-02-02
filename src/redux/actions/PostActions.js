import * as actions from "../constants/PostConstants";
import axios from "axios";

const api_endpoint = process.env.REACT_APP_COUNTRIES_ENDPOINT

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: actions.FETCH_POST_REQUEST });

  try {
    const data = await axios.get(
      api_endpoint
    );
    dispatch({ type: actions.FETCH_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.FETCH_POST_FAILED, payload: error.message });
    console.log(error.message);
  }
};

export const sortPostsAsc = () => (dispatch, getState) => {
  const { PostReducers } = getState();
  dispatch({ type: actions.SORT_POSTS_ASC, payload: PostReducers.posts });
};

export const sortPostsDesc = () => (dispatch, getState) => {
  const { PostReducers } = getState();
  dispatch({ type: actions.SORT_POSTS_DESC, payload: PostReducers.posts });
};

export const searchPosts = (query) => (dispatch, getState) => {
  const { PostReducers } = getState();
  //console.log(PostReducers.searchResults, "postReducers");
  if (PostReducers.searchResults.length !== 0) {
    // temp fix for 0 at first
    const searchResults = PostReducers.searchResults.data.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    );
    dispatch({ type: actions.SEARCH_POSTS, payload: searchResults });
  }
};
