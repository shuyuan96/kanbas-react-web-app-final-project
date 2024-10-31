import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const location = useLocation();
  const isActive = (path: any) => location.pathname === path;
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link 
        to="/Kanbas/Account/Signin"
        id="wd-account-signin"
        className={`list-group-item border border-0 ${isActive('/Kanbas/Account/Signin') ? 'active' : 'text-danger'}`}>
        Signin
      </Link>
      <Link 
        to="/Kanbas/Account/Signup"
        id="wd-account-signup"
        className={`list-group-item border border-0 ${isActive('/Kanbas/Account/Signup') ? 'active' : 'text-danger'}`}>
        Signup
      </Link>
      <Link 
        to="/Kanbas/Account/Profile"
        id="wd-account-Profile"
        className={`list-group-item border border-0 ${isActive('/Kanbas/Account/Profile') ? 'active' : 'text-danger'}`}>
        Profile
      </Link>
    </div>
  );
}