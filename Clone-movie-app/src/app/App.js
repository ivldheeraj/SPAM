import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import MovieDetail from '../components/MovieDetail/MovieDetail'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/movie/:imdbId" element={<MovieDetail/>}></Route>
          <Route element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
