import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { SiEthereum } from 'react-icons/si';

export const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(`Query:`, searchQuery);

    setSearchQuery('');
  };

  return (
    <div>
      <h2>
        <SiEthereum size="36px" color="#0b5394" /> ETH Chain Explorer
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={searchQuery}
          autoComplete="off"
          placeholder="Search by Address or Txn Hash"
          autoFocus
          required
          onChange={handleChange}
        />
        <button type="submit">
          <HiSearch size="20px" color="#66161c" />
        </button>
      </form>
    </div>
  );
};
