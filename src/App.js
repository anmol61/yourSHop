import "./App.css";
// import Header from "./Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

  return (
    <div className="App">
     

      {/* <Router>
        <Routes>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/"></Route>
          <Header />
          <Home />
        </Routes>
      </Router> */}
      
<Router>
  <Routes>
    {/* <Header/> */}
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/checkout" element={<Checkout />}></Route>
  </Routes>
</Router>



    </div>
  );
}

export default App;
