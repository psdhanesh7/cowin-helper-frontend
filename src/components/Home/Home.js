import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/messaging";

export default function Home() {

  useEffect(() => {
		// console.log(user);
		const messaging = firebase.messaging();

		Notification.requestPermission()
			.then(function() {
				console.log('Have permission');
        return messaging.getToken();
			})
      .then(function(token) {
				console.log(token);
				localStorage.setItem('messagingToken', token);
			})
			.catch((err) => {
				console.log("Error: " + err.message);
			})
		
		messaging.onMessage(function(payload) {
			console.log('onMessage: ' + payload);
		})

	})

	return (
		<div>
			Home
		</div>
	)
}