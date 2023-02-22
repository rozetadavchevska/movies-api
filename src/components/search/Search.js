import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <form className="inputSearch" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        id="form" 
        className="form-control" 
      />
      <button type="submit" className="btn btn-search">
        <FontAwesomeIcon icon={faSearch} size="lg" color="white" className="logo-icon"/>
      </button>
    </form>
  );
}

export default Search;