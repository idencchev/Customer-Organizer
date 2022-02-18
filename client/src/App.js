import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import './App.css';
import ActiveCars from "./components/ActiveCars/ActiveCars";
import AddActiveCars from "./components/AddActiveCars/AddActiveCars";
import AddAppointment from "./components/Appointments/AddAppointment";
import Admin from "./components/Admin/Admin";
import Appointments from "./components/Appointments/Appointments";
import Archive from "./components/Archive/Archive";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import { useUserStateValue } from "./Context/UserStateProvider";
import { verifyToken } from "./api/data";
import EditAppointment from "./components/Appointments/EditAppointment";

function App() {

  const [{ }, dispatch] = useUserStateValue();
  const history = useHistory();

  useEffect(async () => {
    const verifyData = await verifyToken();

    const path = history.location.pathname;

    if (verifyData.isVerified) {
      dispatch({
        type: 'VERIFY',
        payload: verifyData
      });

      // Temporally route protection
      if (path === '/login') {
        return history.push('/');
      }

      if (path === '/user/admin' && verifyData.isAdmin === false) {
        return history.push('/');
      }

    } else {
      if (path === '/login') {
        return history.push(path);
      }
      return history.push('/');
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/user/admin" component={Admin} />
        <Route exact path="/view/archive" component={Archive} />
        <Route exact path="/view/cars" component={ActiveCars} />
        <Route exact path="/create/car" component={AddActiveCars} />
        <Route exact path="/view/appointments" component={Appointments} />
        <Route exact path="/create/appointment" component={AddAppointment} />
        <Route exact path="/edit/appointments/:id" component={EditAppointment} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;