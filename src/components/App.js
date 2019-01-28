import React from 'react';
import Store from '../store/store';
import Header from './Header';
import TariffList from './TariffList';

function App() {
  return (
    <Store>
      <div>
        <Header />
        <TariffList />
      </div>
    </Store>
  );
}

export default App;
