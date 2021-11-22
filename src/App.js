import './App.css';
import { useState } from 'react';
import ListItems from './components/ListItems/ListItems'
import Navbar from './components/Navbar/Navbar'
import logo from './logo.png'

function App() {
  const [action, setAction] = useState('drag');

  const setSquareAction = (action) => {
    setAction(action.target.value);
  }

  return (
    <div className="App">
      <Navbar logo={logo}/>
      <button value="drag" onClick={setSquareAction}>Wobble Around</button>
      <button value="offset" onClick={setSquareAction}>Stay On</button>
      <button value="stick" onClick={setSquareAction}>Stick On Boundary</button>
      <ListItems action={action} />
    </div>
  );
}

export default App;