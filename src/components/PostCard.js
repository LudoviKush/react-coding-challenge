import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const [country, setCountry] = useState('');
  let redirect = useNavigate();

  const handleClick = () => {
    // clicked post(Country) should be passed to Cities component

    if (country.name === undefined) { // instead of this how should be handled ?
	  setCountry(post)
	  console.log(post, 'country')
      redirect("/cities", {select: country}); //and here redirect to Country view (Cities)
    }
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
    country: state.PostReducers.country,
  };
};

export default connect(mapStateToProps)(PostCard);
