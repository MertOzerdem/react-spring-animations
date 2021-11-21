import './App.css';
import { useState } from 'react';
import ListItems from './components/ListItems/ListItems'
import Navbar from './components/Navbar/Navbar'
import logo from './logo.png'

function App() {
  const [action, setAction] = useState('Wobble');

  const setSquareAction = (action) => {
    setAction(action);
    console.log("action: ", action.target.value);
  }

  return (
    <div className="App">
      <Navbar logo={logo}/>
      <button value="Wobble" onClick={setSquareAction}>Wobble Around</button>
      <button value="Stick" onClick={setSquareAction}>Stay On</button>
      <ListItems action={action} />
    </div>
  );
}

export default App;