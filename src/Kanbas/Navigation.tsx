import { useLocation, Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import {IoCalendarOutline, IoArrowBack} from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    {label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard},
    {label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid},
    {label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline},
    {label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox},
    {label: "Labs", path: "/Labs", icon: LiaCogSolid},
    { label: "Landing", path: "/Landing", icon: IoArrowBack },
  ];

  return (
    <div id="wd-kanbas-navigation" className="list-group text-center rounded-0" style={{ width: '105px' }}>
      <a id="wd-account-link" target="_blank" 
        href="https://www.northeastern.edu/">
        <img src="/images/neu.png" width="75px" /></a>
      <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
      <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
        ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
      {link.icon({ className: "fs-1 text-danger"})}
      <br />
      {link.label}
      </Link>))}
    </div>
  );
}