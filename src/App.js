import './App.css';
import { useState } from 'react';
import Header from './common/header/header';
import Footer from './common/footer/footer';
import Homedesktop from './components/home/home';
import Login from './components/login/login';

function App() {
  const [isUser,setIsUser] = useState(false);
  const [islogin,setIslogin] = useState(false);
  return (
    <div className="App">
      <Header isUser ={isUser} setIsUser={setIsUser} islogin={islogin} setIslogin={setIslogin}/>
      {isUser ? <Homedesktop /> : <Login setIsUser={setIsUser} islogin={islogin} setIslogin={setIslogin} />}
      <Footer />
    </div>
  );
}

export default App;
