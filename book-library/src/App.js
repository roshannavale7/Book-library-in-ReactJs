
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { SidebarVisibilityContextProvider } from './store/sitebarVisibilityContext';
import 
  {BrowserRouter as Router,
  Routes,
  Route  } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import List from './pages/list';
import Detail from './pages/book';
import FooterPrimary from './components/Footer-primary';
import FooterSecondary from './components/Footer-secondary';
import FooterTernary from './components/Footer-ternary';


function App() {
  return (
    <div className="App">

      <Router>
        <SidebarVisibilityContextProvider>
          <Header/>
          <Backdrop/>
          <Sidebar/>
        </SidebarVisibilityContextProvider>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          
          <Route path="/book"exact element={<Detail/>} />
          <Route path="/book/:id" exact element={<Detail />} />
          <Route path="/list" element={<List/>} />
          <Route path="/create" element={<Create/>} />
          
        </Routes>
        <FooterPrimary/>
        <FooterSecondary/>
        <FooterTernary/>
        
      </Router>
      
    
    </div>
  );
};

export default App;
