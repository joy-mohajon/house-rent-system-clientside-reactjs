import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddProperty from "./components/AddProperty/AddProperty/AddProperty";
import NavLayout from "./layouts/NavLayout";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import PropertyInfo from "./pages/PropertyInfo/PropertyInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index exact element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="add-property" element={<AddProperty />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property-info" element={<PropertyInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
