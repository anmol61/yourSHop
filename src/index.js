import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer,{initialState} from './components/Reducer';
import { StateProvider } from './components/StateProvider';
import Footer from './components/Footer';
// import FeaturedProduct from './FeaturedProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    
    <Footer/>
  </React.StrictMode>
);


