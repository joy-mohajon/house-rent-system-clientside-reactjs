import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddProperty from "./components/AddProperty/AddProperty/AddProperty";
import NavLayout from "./layouts/NavLayout";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index exact element={<Home />} />
          {/* <Route path="/about" element={About} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="/contact" element={Contact} /> */}
          <Route path="addproperty" element={<AddProperty />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
