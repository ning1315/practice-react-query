import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import { Planets } from './components/planets/Planets';
import { People } from './components/people/People';

function App() {
  const [page, setPage] = useState('planets');

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Nav setPage={setPage} />
      <div className="content">{page === 'planets' ? <Planets /> : <People />}</div>
    </div>
  );
}

export default App;
