import "./App.css";
import Title from "./Title.jsx";
import "./Style.css";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import Payment from "./Payment.jsx";
import Signup from "./Signup.jsx";
import Confirm from "./Confirm.jsx";
import Navbar from "./Component/Navbar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Routes/Contact";
import ChangeAddress from "./ChangeAddress.jsx";
import Dairypage from "./Dairypage.jsx";


function App() {
  // return(
  //   <div>
  //     <Dairypage/>
  //   </div>
  // );
//}
  
  const location = useLocation();

  return (
    <div>
      
      
      
      {location.pathname === "/" && <Login />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/title" element={<Title />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/confirm" element={<Confirm/>} />
        <Route path="/changeAddress" element={<ChangeAddress/>} />
        <Route path="/dairypage" element={<Dairypage/>} />
        
      
      </Routes>
     
    </div>
  );
}

export default App;