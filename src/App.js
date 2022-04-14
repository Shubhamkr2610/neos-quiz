import { Home, Quiz, Result, Guide} from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header , Footer} from './components/index';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={ <Home /> }/> 
          <Route path="/Quiz" exact element={ <Quiz /> }/>
          <Route path="/Result" exact element={ <Result /> }/>
          <Route path="/Guide" exact element={ <Guide /> }/>
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
