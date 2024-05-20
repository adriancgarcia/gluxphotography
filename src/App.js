// import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import { Container, Row, Col } from "react-bootstrap";
import { Header } from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import ImagesCollection from './components/ImagesCollection';
import InformationSection from './components/InformationSection';
import ContactForm from './components/ContactForm';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Weddings } from './pages/Weddings';
import { Maternity } from './pages/Maternity';
import { Quinces } from './pages/Quinces';
import { Events } from './pages/Events';
import { Family } from './pages/Family';
import { Portraits } from './pages/Portraits';
import { Video } from './pages/Video';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Weddings" element={<Weddings/>}/>
        <Route path="/Maternity" element={<Maternity/>}/>
        <Route path="/Quinces" element={<Quinces/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Family" element={<Family/>}/>
        <Route path="/Portraits" element={<Portraits/>}/>
        <Route path="/Video" element={<Video/>}/>

      </Routes>
    </Router>
  )
}


// function App() {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <div className="App">
//       <Container>
//         <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
//         <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
//         <HeroSection />
//         <InformationSection />
//         <ImagesCollection />
//         <Container className='footer-section'>
//           <Row>
//             <div className=''>
//               <img src='/images/SolarEclipse.jpg' alt="solar eclipse"></img>
//             </div>
//           </Row>
//           <Row className='my-3'>
//             <Col>
//               <ContactForm />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </div>
//   )
// }

export default App;
