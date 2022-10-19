import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UserProvider } from './components/UseContext/UseContext';
import Delete from './components/Delete/Delete';
import Update from './components/Edit/Update';
import Add from './components/Create/Add';
import Read2 from './components/Read/Read2';
import { useDispatch, useSelector } from 'react-redux'
import Navbarheader from './components/Shared/Nav';
import Footer from "./components/Footer/Footer";
import './App.css'
import Contact from "./components/Contact/Contact/Contact";
import Home from "./components/Pages/Home/Home";

function App() {
  // const changeTheNumber = useSelector(state => state.changeTheNumber);
  // const dispatch = useDispatch();
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
        <Navbarheader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="delete/:id" element={<Delete />} />
            <Route path="edit/:id" element={<Update />} />
            <Route path="details/:id" element={<Read2 />} />
            <Route path="addBlog" element={<Add />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <div className='text-center'>
        <Button onClick={() => dispatch(decNumber())} variant="success">-</Button>
        <input type='text' value={changeTheNumber} />
        <Button onClick={() => dispatch(insNumber())} variant="success">+</Button> */}
      {/* </div> */}
      </div>
     
    </UserProvider>
  );
}

export default App;
