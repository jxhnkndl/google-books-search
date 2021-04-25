// Import dependencies
import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import API from './utils/API';
import MainNav from './components/MainNav';
import Header from './components/Header';
import Search from './components/Search';
import Saved from './components/Saved';
import Footer from './components/Footer';
import './App.scss';

// Create and export App component
export default function App() {
  const fetchBooks = async () => {
    try {
      const books = await API.getBooks();
      console.log(books);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app-container bg-dark">
      <Router>
        <MainNav />
        <Header />
        <main className="container mb-5">
          <Switch>
            <Route exact path={["/", "/search"]} component={Search} />
            <Route exact path={"/saved"} component={Saved} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
