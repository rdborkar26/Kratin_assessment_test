import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import AddMedicine from './components/AddMedicine';
import MedicationList from './components/MedicationList';

function App() {
  return (
    <>
      <Router>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/addmedicine" element={<AddMedicine/>}/>
          <Route path="/showlist" element={<MedicationList/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
