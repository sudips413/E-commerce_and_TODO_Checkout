
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import Admin from './pages/Admin/Admin';
import{BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";
function App() {
  return (
    <><Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>    
      
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
    
    </>
    
  );
}

export default App;
