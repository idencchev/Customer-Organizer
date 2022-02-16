import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { getUserData } from "./api/localStorageSetup";
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
import { useUserStateValue } from "./Context/UserStateProvider";
import IsAdmin from "./HOC/isAdmin";
import IsAuth from "./HOC/isAuth";
import isGuest from "./HOC/isGuest";

function App() {
  const [{ }, dispatch] = useUserStateValue();

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      dispatch({
        type: 'LOGIN',
        payload: userData
      })
    }
  }, []);

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
        <Route path="/login" component={isGuest(Login)} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
