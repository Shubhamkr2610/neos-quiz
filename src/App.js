import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './pages/home-page/Home';
import {Quiz} from './pages/quiz-page/Quiz';
import {Result} from './pages/result-page/Result';


function App() {
  return (

    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={ <Home /> }/>
          <Route path="/Quiz" exact element={ <Quiz /> }/>
          <Route path="/Result" exact element={ <Result /> }/>
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
