
// import NavBarMotion from './components/navbar/NavBarMotion';
import Courses from './components/Courses/Courses';
import Labs from './components/Labs/Labs';
import Training from './components/Training/Training';
import Faculties from './components/faculties/Faculties';
import Footer from './components/footer/Footer';
import MiniFooter from './components/footer/miniFooter/MiniFooter';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import Home from "./components/Home"
import { Route, Routes } from 'react-router-dom';
import "./index.css"


function App() {
  return (
    <div className="App">

      <Navbar />



      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<Intro />} />
        <Route path="/service" element={<Service />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutUs" element={<Intro />} />
        <Route path="/aboutUs" element={<Intro />} />
        <Route path="/aboutUs" element={<Intro />} />
        <Route path="/aboutUs" element={<Intro />} />
        <Route />
      </Routes>
      <Footer />
      <MiniFooter />
    </div>
  );

}

export default App;
