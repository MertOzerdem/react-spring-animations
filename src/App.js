import './App.css';
import { useState } from 'react';
import ListItems from './components/ListItems/ListItems'
import Navbar from './components/Navbar/Navbar'
import logo from './logo.png'
import Slider from './components/Slider/Slider'
import Reorder from './components/Reorder/Reorder'

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
      <div className="container">
        <Slider>Slide Me</Slider>
      </div>
      <Reorder items={'Lorem ipsum dolor sit'.split(' ')} />
    </div>
  );
}

export default App;