
import './App.css';
import Footer from './pages/global-layout/footer/Footer';
import { Header } from './pages/global-layout/header/Header';
import { Home } from './pages/main/Home';

function App() {
  return (
    <div className='app_main'>
      <Header/>

      <Home/>

      <Footer/>
      
    </div>
  );
}

export default App;
