import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Registration/Registration';
import AuthProvider from './contexts/AuthProvider';
import Explore from './Pages/Explore/Explore';
import Ratingus from './Pages/Ratingus/Ratingus'
import PrivateRoute from './Authentication/Login/PrivateRoute/PrivateRoute';
import Order from './Pages/Order/Order';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pay from './Pages/Pay/Pay';
import Advice from './Pages/Advice/Advice';
function App() {
  return (
    <AuthProvider>
      <Router >
      <Switch>
{        
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute> } *
        <PrivateRoute path="/rating">
          <Ratingus></Ratingus>
        </PrivateRoute>
        <PrivateRoute path="/pay">
          <Pay></Pay>
        </PrivateRoute>
        <PrivateRoute path="/order/:itemid">
          <Order></Order>
        </PrivateRoute>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Advice">
          <Advice></Advice>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Explore">
          <Explore/>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
