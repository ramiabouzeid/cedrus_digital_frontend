// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MoviesList from './components/MoviesList';
import CreateMovieForm from './components/CreateMovieForm';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul> */}

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <RegisterForm />
            </Route>
            <Route exact path="/register">
              <RegisterForm />
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/moviesList">
              <MoviesList />
            </Route>
            <Route exact path="/createMovie">
              <CreateMovieForm />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
