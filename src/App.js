import './App.css';
import { Route , Routes } from 'react-router-dom';
import {Box} from '@mui/material'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExperiencesDetails from './pages/ExperiencesDetails';
import Footer from './components/Footer';
function App() {
  return (
       <Box width="400px" sx={{ width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercies/:id' element={<ExperiencesDetails/>} />
        </Routes>
        <Footer/>
       </Box>
  );
}

export default App;
