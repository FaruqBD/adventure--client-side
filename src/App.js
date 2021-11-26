import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./components/Home/Home/Home";
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import AddService from './components/AddService/AddService';
import Order from './components/Order/Order';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ManageBookings from './components/ManageBookings/ManageBookings';

function App() {
  return (
    <div className="App min-vh-100">
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services limit="20"></Services>
            </Route>
            <PrivateRoute path="/my-booking">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/manage-booking">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/add-service">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
