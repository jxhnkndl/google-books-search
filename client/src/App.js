// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './utils/API';
import MainNav from './components/MainNav';
import Header from './components/Header';
import Search from './components/Search';
import Saved from './components/Saved';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

// Toast

// Create and export App component
export default function App() {
  return (
    <div className="app-container bg-dark">
      <Router>
        <MainNav />
        <Header />
        <main className="container mb-5">
          <Switch>
            <Route exact path={"/"} component={Search} />
            <Route exact path={"/search"} component={Search} />
            <Route exact path={"/saved"} component={Saved} />
          </Switch>
        </main>
        <Footer />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressionBar={false}
          newestOnTop
          closeOnClick
        />
      </Router>
    </div>
  );
}
