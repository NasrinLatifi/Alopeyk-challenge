import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "../Views/Home";
import Account from "../Views/Account";

export const HOME_ROUTE = "/home";
export const ACCOUNT_ROUTE = "/account";

function RouteManager() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={ACCOUNT_ROUTE} />} />
        <Route path={ACCOUNT_ROUTE} element={<Account />} />
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteManager;
