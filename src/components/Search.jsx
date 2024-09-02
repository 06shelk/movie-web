import React, { useState, useEffect } from 'react';

const Search = ({ onSearch, value }) => {
    const [query, setQuery] = useState(value || '');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(query);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [query, onSearch]);

     useEffect(() => {
        setQuery(value);
    }, [value]);

    return (
        <div className='search'>
            {/* 검색창 */}
            <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
