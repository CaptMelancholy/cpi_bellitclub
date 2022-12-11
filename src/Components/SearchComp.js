import React, { useState } from 'react';

import SearchList from './Search';

import './Search.css'

function Search({ details }) {

    const [searchField, setSearchField] = useState("");

    const filteredPersons = details.filter(
        person => {
            return (
                person
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <SearchList filteredPersons={filteredPersons} />
        );
    }

    return (
        <section>
            <div className="text-center">
                <div>
                    <h2 className="f2">Search your course</h2>
                </div>
                <div className="pa2">
                    <input
                        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                        type="search"
                        placeholder="Search People"
                        onChange={handleChange}
                    />
                </div>
            </div>

            {searchList()}
        </section>
    );
}

export default Search;