import { Redirect, useHistory } from "react-router-dom"
import firebase from "firebase/app";
import "firebase/auth";
import "./Navbar.css"

export default function Navbar() {

	const history = useHistory();

	const handleLogout = (e) => {
		firebase.auth().signOut()
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				alert(err.message);
			})
	}

	return (
		<div>
			<ul className="topnav">
				<li><div onClick={(e)=>{return <Redirect to="/home"/>}}><a className="active" href="#">Profile</a></div></li>
				<li><div onClick={(e)=>{return <Redirect to="/editprofile" />}}><a href="#">Edit Profile</a></div></li>
				<li className="right"><div onClick={handleLogout}><a href="#">Logout</a></div></li>
			</ul>
		</div>
	)
}