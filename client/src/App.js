import { Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={Home} />
      <Footer />
    </div>
  );
}

export default App;
