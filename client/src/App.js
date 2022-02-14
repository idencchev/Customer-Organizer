import { Route, Switch } from "react-router-dom";
import './App.css';
import ActiveCars from "./components/ActiveCars/ActiveCars";
import AddActiveCars from "./components/AddActiveCars/AddActiveCars";
import AddAppointment from "./components/AddAppointment/AddAppointment";
import Admin from "./components/Admin/Admin";
import Appointments from "./components/Appointments/Appointments";
import Archive from "./components/Archive/Archive";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import { clearStorage } from "./utils/clearStorage.js";

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/logout" render={props => {
          document.cookie = `x-auth-token= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
          clearStorage();
          props.history.push('/');
        }} />
        <Route path="/user/admin" component={Admin} />
        <Route path="/view/archive" component={Archive} />
        <Route path="/view/cars" component={ActiveCars} />
        <Route path="/create/car" component={AddActiveCars} />
        <Route path="/view/appointments" component={Appointments} />
        <Route path="/create/appointment" component={AddAppointment} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
