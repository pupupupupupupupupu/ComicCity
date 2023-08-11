import React from 'react'
import { useRef } from 'react';

const Search = ({setSearch, doSearch}) => {

  const searchText = useRef("");

  return (
    <>
        <input
            type="text"
            placeholder="Search"
            // onChange={({currentTarget:input}) => setSearch(input.value)}
            ref = {searchText}
        />
        <button onClick={()=>doSearch(searchText.current.value)}>Search</button>
    </>

    )
}

export default Search;