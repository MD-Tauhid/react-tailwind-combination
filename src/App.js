
import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import NavBar from './components/NavBar/NavBar';
import Phones from './components/Phones/Phones';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <Phones></Phones>
    </div>
  );
}

export default App;
