import {
  BrowserRouter,
  Routes ,
  Route,
  Link,
  Navigate ,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from "../Views/Home";
import Login from "../Views/Login";

function RouteManager() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/"  element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes >
    </BrowserRouter>
  );
}

export default RouteManager;
