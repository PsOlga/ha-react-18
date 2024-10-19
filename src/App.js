
import './App.css';
import Contacts from './components/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    <Routes>
      <Route path="/" element={<Contacts />} />

    </Routes>

  );
}

export default App;
