import { useLocation } from "react-router";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const getSideBarNames = (path:any) => {
    return pathname.includes(path)
      ? "list-group-item bg-white text-danger text-center border-0 nav-link"
      : "list-group-item bg-black text-white text-center border-0 nav-link";
  };

  return (
    <div id="wd-kanbas-navigation" className="list-group text-center rounded-0" style={{ width: '105px' }}>
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/">
        <img src="/images/neu.png" width="75px" /></a>
      <a id="wd-account-link" href="#/Kanbas/Account" className={getSideBarNames("Account")}>
        <FaRegCircleUser className={pathname.includes("Account") ? "fs-1 text-danger" : "fs-1 text-white"} /><br />
        Account
      </a>
      <a id="wd-dashboard-link" href="#/Kanbas/Dashboard" className={getSideBarNames("Dashboard")}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard</a>
      <a id="wd-course-link" href="#/Kanbas/Courses" className={getSideBarNames("Courses")}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses</a>
      <a id="wd-calendar-link" href="#/Kanbas/Calendar" className={getSideBarNames("Calendar")}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar</a>
      <a id="wd-inbox-link" href="#/Kanbas/Inbox" className={getSideBarNames("Inbox")}>
        <FaInbox className="fs-1 text-danger" /><br /> 
        Inbox</a>
      <a id="wd-labs-link" href="#/Labs" className={getSideBarNames("Labs")}>
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs</a>
    </div>
  );
}
