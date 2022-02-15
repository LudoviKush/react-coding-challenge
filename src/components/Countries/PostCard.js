import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  let history = useNavigate();

  const handleClick = () => {

    const selCountry = post.name
    console.log(selCountry, 'selected')
	  //history('/cities/' + {selCountry});
    history('/cities/'+selCountry);

  };

  return (
    <div key={post.iso2} onClick={(post) => handleClick(post)} className="post">
      <h2>{post?.name}</h2>
      <p>{post?.iso2}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducers.posts,
    page: state.PostReducers.page,
    searchResults: state.PostReducers.searchResults,
    country: state.PostReducers.country
    }
  }

export default connect(mapStateToProps)(PostCard);
