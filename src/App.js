import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage'
import Gallary from './Gallary';
import Work from './Work';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/kingsharpnkansah.' element={<HomePage/>}/>
        <Route path='/kingsharpnkansah./gallary' element={<Gallary/>}/>
        <Route path='/kingsharpnkansah./work' element={<Work/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
