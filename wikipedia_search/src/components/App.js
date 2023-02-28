import { useEffect, useState } from 'react';
import './App.css';
import Header from './containers/Header/Header'
import Results from './Results/Results';
import Search from './Search/Search';

function App() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('belgrade');

  useEffect(() => {
    const URL = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${search}&exintro=&prop=extracts%7Cpageimages&format=json&origin=*`
    fetch(URL)
      .then(r => r.json())
      .then(t => setResults(t.query.pages))
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} />
      <Results results={results} />
    </div>
  );
}

export default App;
