import React, { FormEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { queries } from '@testing-library/dom';

function App() {
  const [recipesFound, setRecipesFound] = useState([]);
  const [recipesSearch, setRecipesSearch] = useState ('');

  const searchForRecipes= async(query: string): Promise<any> => {
    const result = await fetch(`http://localhost:3001/?search=${query}`)
      return (await result.json()). results;
  };

  const search = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    //const input = form.querySelector('#searchText')
  };

  useEffect(() => {
    (async () => {
      const query  =  encodeURIComponent(recipesSearch);
      const response = await searchForRecipes(query);
      setRecipesFound(response)
    })();
  });

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <form className="searchForm" onSubmit={event => search(event)} >
        <input id="searchText" type="text" />
        <button>Search</button>
      </form>
      
    </div>
  );
}

export default App;
