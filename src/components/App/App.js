import React from 'react';
import './App.css';
import BussinesList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component{
  render(){
  return (
    <div className="App">
    <h1>Ravenous</h1>
    <SearchBar />
    <BussinesList />
    </div>
  );
  }
}

export default App;
