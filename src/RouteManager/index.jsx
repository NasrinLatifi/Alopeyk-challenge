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

/** path of pages */
export const HOME_ROUTE = "/home";
export const ACCOUNT_ROUTE = "/account";

/**
 * Manage route of project
 * @returns app routing
 */
function RouteManager() {
  return (
    <BrowserRouter>
      <Routes>
        {/* defult route is account page  */}
        <Route path="/" element={<Navigate replace to={ACCOUNT_ROUTE} />} />
        <Route path={ACCOUNT_ROUTE} element={<Account />} />
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteManager;
