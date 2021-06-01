import React, { useState, useEffect } from "react";
import QS from "query-string";
import { useHistory, useLocation } from "react-router";
import Book from "./Book";
import "./App.css";
const SearchBooks = () => {
  const [searchText, setSearchText] = useState("");
  const [prevSearchText, setPrevSearchText] = useState("prevText");
  const [results, setResults] = useState([]);
  const [sortFilter, setSortFilter] = useState("");
  const [queryString, setQueryString] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText) return;
    setQueryString(QS.stringify({ q: searchText, sortBy: sortFilter }));
  };

  const handleSortFilterChange = (e) => {
    if (e.target.value === "title") {
      setQueryString(QS.stringify({ q: searchText, sortBy: "title" }));
    } else if (e.target.value === "publishDate") {
      setQueryString(QS.stringify({ q: searchText, sortBy: "publishDate" }));
    } else setQueryString(QS.stringify({ q: searchText, sortBy: "" }));
  };

  useEffect(() => {
    if (queryString) history.push(`/search-books/?${queryString}`);
  }, [history, queryString]);

  useEffect(() => {
    const { q, sortBy } = QS.parse(location.search);
    // Don't call if the search text is same
    if (q && q !== prevSearchText) {
      setSearchText(q);

      fetch(`https://openlibrary.org/search.json?title=${q}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setResults(result.docs ? result.docs : []);
            setPrevSearchText(q);
          },
          (error) => {
            console.log(error);
          }
        );
    }

    setSortFilter(sortBy);
    if (sortBy) {
      const _results = [...results];
      if (sortBy === "title") {
        _results.sort((a, b) => a.title.localeCompare(b.title));
        setResults(_results);
      } else if (sortBy === "publishDate") {
        _results.sort(
          (a, b) =>
            new Date(a.first_publish_year).getTime() -
            new Date(b.first_publish_year).getTime()
        );
        setResults(_results);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, prevSearchText]);

  return (
    <div>
      <div class='header-container'>
       <div class='title-item'> <h1>Search Books</h1></div> 
        <div class='input-item'>
          <form onSubmit={handleSearch}>
            <input
              name="search"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" name="searchButton">
              Search
            </button>

            <label>
              Sort By :  
              <select value={sortFilter} onChange={handleSortFilterChange}>
                <option value=""></option>
                <option value="title">Book Title</option>
                <option value="publishDate">Book First Published Year</option>
              </select>
            </label>
          </form>
        </div>
      </div>
      <div >
        {results.length > 0 &&
          results.map((b, index) => <Book key={index} book={b}></Book>)}
      </div>
    </div>
  );
};

export default SearchBooks;
