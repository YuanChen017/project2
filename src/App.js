import "./App.css";
import { useSelector } from "react-redux";
import Header from "./common/header/header";
import Footer from "./common/footer/footer";
import Homedesktop from "./components/home/home";
import Login from "./components/login/login";

function App() {
  const isuser = useSelector((state) => state.isuser);

  return (
    <div className="App">
      <Header />
      {isuser ? <Homedesktop /> : <Login />}
      <Footer />
    </div>
  );
}

export default App;
