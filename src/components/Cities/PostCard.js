import React from "react";
import { connect } from "react-redux";

const PostCard = ({ city }) => {

  const handleClick = (event) => {

    console.log(event.target.value)
  };

  return (
    <div key={city} onClick={(city) => handleClick(city)} className="post">
      <h2>{city}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducer.posts,
    page: state.PostReducer.page,
    searchResults: state.PostReducer.searchResults,
    country: state.PostReducer.country
    }
  }

export default connect(mapStateToProps)(PostCard);
