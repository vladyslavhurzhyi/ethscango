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
    <div className="relative w-full md:w-2/3 lg:w-2/4 my-11 md:ml-10  dark:text-white ">
      <h2 className="flex items-center text-2xl leading-relaxed py-2 mr-4 whitespace-nowrap ">
        <SiEthereum className="mr-1 text-purple-600" size={36} /> ETH Chain
        Explorer
      </h2>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="w-full pl-2 h-9 rounded outline-none dark:text-black "
          type="text"
          name="query"
          value={searchQuery}
          autoComplete="off"
          placeholder="Search by Address or Txn Hash"
          autoFocus
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded bg-gray-700 ml-1 w-11 h-10"
        >
          <HiSearch className=" text-purple-600" size={30} />
        </button>
      </form>
    </div>
  );
};
