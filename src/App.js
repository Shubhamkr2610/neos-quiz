import { Home, Quiz, Result, Guide} from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header , Footer} from './components/index';
import './App.css';
import { PlayNowQuiz } from 'components/playnow/PlayNowQuiz';

function App() {
  return (

    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={ <Home /> }/> 
          <Route path="/quiz" exact element={ <Quiz /> }/>
          <Route path="/result" exact element={ <Result /> }/>
          <Route path="/guideline"  element={ <Guide /> }>
            <Route path=":guidelineId" element = {<PlayNowQuiz/>}/>
          </Route>
        </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
