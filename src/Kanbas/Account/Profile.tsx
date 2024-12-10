import * as client from "./client";
import * as peopleClient from "../Courses/People/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({
        username: "",
        password: "",
        firstName: "",
        email: "",
        lastName: "",
        dob: "",
        role: "USER",
        loginId: "",
        section: "",
        lastActivity: "",
        totalActivity: "",
    });
    const navigate = useNavigate();
    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }  
    };
    useEffect(() => { fetchProfile(); }, []);
    const dispatch = useDispatch();
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };
    const saveProfile = async () => {
        await peopleClient.updateUser(profile);
    }

    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            {profile && (
                <div>
                    <b>Username:</b>  
                    <input id="wd-username" className="form-control mb-2" value={profile.username}
                            onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
                    <b>Password:</b>  
                    <input id="wd-password" className="form-control mb-2" value={profile.password}
                            onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
                    <b>First Name:</b>  
                    <input id="wd-firstname" className="form-control mb-2" value={profile.firstName}
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
                    <b>Last Name:</b>  
                    <input id="wd-lastname" className="form-control mb-2" value={profile.lastName}
                            onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
                    <b>Date of Birth:</b>  
                    <input id="wd-dob" className="form-control mb-2" value={profile.dob}
                            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
                    <b>Email:</b>  
                    <input id="wd-email" className="form-control mb-2" value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
                    <b>Roles:</b>  
                    <select id="wd-role" className="form-select mb-4" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
                        <option value="USER">User</option>            <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={saveProfile} id="wd-save-btn" className="btn btn-secondary w-100 mb-2">
                        Save
                    </button>
                    <button onClick={signout} id="wd-signout-btn" className="btn btn-danger w-100">
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}