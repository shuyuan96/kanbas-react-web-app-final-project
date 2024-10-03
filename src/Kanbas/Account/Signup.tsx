import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h2>Signup</h2>
      <input id="wd-username"
            placeholder="username"
            className="form-control mb-2"/>
      <input id="wd-password"
            placeholder="password" type="password"
            className="form-control mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100">
            Sign up </Link><br />
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
);}
