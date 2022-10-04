import React from "react";
import "../app/styles/Profile.css";
import { selectUser } from "../features/userSlice";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

function Profile() {
    const user=useSelector(selectUser)
  return (
    <div className="profile">
      <Nav />
      <div className="profileBody">

          <h1>Edit Profile</h1>
          <div className="profileInfo">

<img   src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="" />
            
            <div className="profileDitails">
                <h2>{user.email}</h2>
                <div className='profilePlans'>
                    <h3>Plans</h3>
                    <button onClick={()=>auth.signOut()} className='signOut'>Sign Out</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Profile;
