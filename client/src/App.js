import { Route, Switch } from "react-router-dom";
import './App.css';
import ActiveCars from "./components/ActiveCars/ActiveCars.js";
import AddActiveCars from "./components/AddActiveCars/AddActiveCars.js";
import AddAppointment from "./components/AddAppointment/AddAppointment";
import Admin from "./components/Admin/Admin.js";
import Appointments from "./components/Appointments/Appointments.js";
import Archive from "./components/Archive/Archive.js";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import IsAdmin from "./HOC/isAdmin.js";
import IsAuth from "./HOC/isAuth.js";

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/user/admin" component={IsAdmin(Admin)} />
        <Route path="/view/archive" component={IsAuth(Archive)} />
        <Route path="/view/cars" component={IsAuth(ActiveCars)} />
        <Route path="/create/car" component={IsAuth(AddActiveCars)} />
        <Route path="/view/appointments" component={IsAuth(Appointments)} />
        <Route path="/create/appointment" component={IsAuth(AddAppointment)} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
