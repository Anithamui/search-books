import React from "react";

const Book = (props) => {
	const { title, first_publish_year, cover_i, author_name } = props.book;

	return (
		<div>
			<img src={`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} alt="" />
			<h4>{title}</h4>
			<p>{first_publish_year}</p>
			<p>{author_name && author_name.length > 0 && author_name.join()}</p>
		</div>
	);
};

export default Book;
