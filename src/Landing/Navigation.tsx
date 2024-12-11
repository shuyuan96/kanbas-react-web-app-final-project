import { Link } from "react-router-dom";
export default function LandingNavigation() {
    return (
        <div id="wd-landing-navigation">
            <Link to="../Kanbas" id="wd-kanbas-link">Kanbas</Link><br />
            <h3>Frontend Repositories</h3>
            <a href="https://github.com/shuyuan96/kanbas-react-web-app-final-project" id="wd-home-link">Repo</a>
            <h3>Backend Repositories</h3>
            <a href="https://github.com/shuyuan96/kanbas-node-server-app-final-proejct" id="wd-home-link">Repo</a>
        </div>
    );
}