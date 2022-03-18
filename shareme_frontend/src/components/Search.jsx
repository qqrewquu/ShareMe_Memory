import React from 'react';
import { useState, useEffect } from 'react';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';



const Search = ( { searchTerm } ) => {

  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // display a specific category pictures
    if (searchTerm){
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query)
        .then((data) => {
          setPins(data);
          // setLoading(false)
        })

    }else{ // display all pictures if no specific searchterm
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          // setLoading(false)
        })
    }
    setLoading(false);

  }, [searchTerm]);


  return (
  <div>
    {loading && <Spinner message='Loading Pictures' />}
    {pins?.length !== 0 && <MasonryLayout pins={pins}/>}

    {pins?.length === 0 && 
    <div className="mt-10 text-center text-xl">
      No Pins Found 
    </div>}

  </div>
  
  

  )
}

export default Search;
