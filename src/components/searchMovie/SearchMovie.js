import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import ApiConfig from '../../api/ApiConfig';

function SearchMovie() {
  const [query, setQuery] = useState('');
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    history(`/search/${query}`);
  };
// ?query=${query}
  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <form className="inputSearch" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} id="form" className="form-control" placeholder="Search"/>
        <button type="submit" className="btn btn-search">
            <FontAwesomeIcon icon={faSearch} size="lg" color="white" className="logo-icon"/>
        </button>
    </form>
  );
}

export default SearchMovie;
