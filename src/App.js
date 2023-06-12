import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"
import Container from './components/layout/Container'
import Projects from './components/pages/Projects'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router> 
      <Navbar />
        <Container customClass="min-heigth">
          <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route path="/Company" element={<Company/>}/> 
            <Route path="/Contact" element={<Contact/>}/> 
            <Route path="/NewProject" element={<NewProject/>}/>
            <Route path="/Projects" element={<Projects/>}/>    
          </Routes>
        </Container>

      <Footer />
    </Router>
  )
}

export default App;
