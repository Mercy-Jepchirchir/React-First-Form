import logo from './logo.svg';
import './App.css';
import About from './About';
import Navbar from './Navbar'

function App() {
  return (
    <div className='parent'>
    <div className='child'>
      <Navbar/>
      <About/>
    </div>
    </div>

    
  );
}

export default App;
