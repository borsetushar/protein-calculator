import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Sections from './sections/Sections';
import StartCalculator from './sections/StartCalculator';
import { Route, Routes } from 'react-router-dom';
import Step1 from './sections/Step1';
import Step2 from './sections/Step2';
import Step3 from './sections/Step3';
import Step4 from './sections/Step4';
import Step5 from './sections/Step5';
import Step6 from './sections/Step6';
import Step7 from './sections/Step7';
import Step8 from './sections/Step8';
import Step9 from './sections/Step9';
import Step10 from './sections/Step10';
import Step11 from './sections/Step11';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Calculator/>}></Route>
        <Route path='/startcalculator' element={<StartCalculator/>}></Route>
        <Route path='/sections' element={<Sections/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
