import React, { Dispatch } from 'react';

interface NavType {
  setPage: Dispatch<string>;
}

const Nav = ({ setPage }: NavType) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  );
};

export default Nav;
