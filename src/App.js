import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Home2 from './components/Home/Home2';
import { UserProvider } from './components/UseContext/UseContext';
import Delete from './components/Delete/Delete';
import Edit from './components/Edit/Edit';
import Update from './components/Edit/Update';
import Create from './components/Create/Create';
import Add from './components/Create/Add';
import Read from './components/Read/Read';
import Read2 from './components/Read/Read2';
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, insNumber } from '../src/Redux/Action/Index'
import { Button} from 'react-bootstrap';
import Form from './Form/Form'
import Navbarheader from './components/Shared/Nav';
import CarouselFade from './components/Header/Header';
import First from './components/FirstSection/First';
import Visit from './components/Visit/Visit';
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import Footer from "./components/Footer/Footer";

function App() {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
            <Navbarheader />
            <CarouselFade />
            <First />
            <Visit />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home2 />} />
            {/* <Route path="/form" element={<Form />} /> */}
            <Route path="delete/:id" element={<Delete />} />
            {/* <Route path="edit/:id" element={<Edit />} /> */}
            <Route path="edit/:id" element={<Update />} />
            {/* <Route path="read/:id" element={<Read />} /> */}
            <Route path="details/:id" element={<Read2 />} />
            {/* <Route path="create" element={<Create />} /> */}
            <Route path="addBlog" element={<Add />} />
            {/* <Route path="contact" element={ <Contact/> } /> */}
          </Routes>
          <UpcomingEvents />
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
