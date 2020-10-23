import React from 'react';
import Header from './components/Header/Header';
import TopCardList from './components/TopCardList/TopCardList';
import Overview from './components/Overview/Overview';
import './App.css';

const App = () => {
  return(
    <>
      <Header />
      <TopCardList />
      <Overview />
    </>
  )
}

export default App;
