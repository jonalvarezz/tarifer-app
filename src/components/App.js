import React from 'react';
import Store from '../store/store';
import Header from './Header';
import TariffList from './TariffList';
import Footer from './Footer';

function App() {
  return (
    <Store>
      <React.Fragment>
        <Header />
        <TariffList />
        <Footer />
      </React.Fragment>
    </Store>
  );
}

export default App;
