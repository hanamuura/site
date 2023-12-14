import './App.css';
import { Header } from "./components/Header.jsx";
import {Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Main from './pages/Main.jsx';
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' Component={Main}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
    </Routes>
    </>
  );
}

export default App;
