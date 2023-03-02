import { Suspense, useState } from 'react';
import './App.css';
import Header from './containers/Header/Header'
import Loading from './containers/Loading/Loading';
import Results from './Results/Results';
import Search from './Search/Search';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} />
      {search
        ? <Suspense fallback={<Loading />} >
          <Results search={search} />
        </Suspense>
        : null}

    </div>
  );
}

export default App;
