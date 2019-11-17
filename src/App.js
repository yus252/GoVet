import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import MyForm from './components/MyForm';
import Points from './components/Points';

function App() {
  return (
    <div className="App" >
        <MyCard />
        <Points />

    </div>
  );
}

export default App;
