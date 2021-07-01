import { Redirect } from "react-router-dom"
import "firebase/messaging";

export default function Login({ user }) {

	if(user) {
		return (
			<div>
				Login
			</div>
		)
	} else {
		return <Redirect to='/home'/>
	}
}