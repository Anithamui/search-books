import React from "react";

const Book = (props) => {
  const { title, first_publish_year, cover_i, author_name } = props.book;

  return (
    <div class="results-container">
      <div class="result-image">
        <img
          src={cover_i ?`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
		  : 'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-04-300x300.png'
		}	  
          
          alt="No Cover Found"
        />
      </div>
      <div class="result-info">
        <h4>{title}</h4>
        <p>
          {first_publish_year && `First Published in : ${first_publish_year}`}
        </p>
        <p> {author_name && author_name.length > 0 && `By ${author_name.join()}`} </p>
      </div>
    </div>
  );
};

export default Book;
