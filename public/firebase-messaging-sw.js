import firebase from "firebase/app";
import "firebase/messaging";

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
    const title = 'Hello world';
    const options = {
        body: 'You recieved a message'
    }

    return self.registration.showNotification(title, options);
})