import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-5xl font-bold my-2'>This is tailwind header</h1>
      <p className='text-3xl my-5'>This is a paragraph</p>
    </div>
  );
}

export default App;
