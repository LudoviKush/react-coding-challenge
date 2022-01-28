import React from 'react';

const PostCard = ({ post }) => {

const handleClick = () => {
console.log(post)
}

	return (
		<div key={post.iso2} onClick={(post) => handleClick(post)} className="post">
			<h2>{post?.name}</h2>
			<p>{post?.iso2}</p>
		</div>
	);
};

export default PostCard;
