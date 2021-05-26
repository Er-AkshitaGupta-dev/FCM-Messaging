
var admin = require("firebase-admin");

var serviceAccount = require("C:/fcm_messaging/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// This registration token comes from the client FCM SDKs.
var registrationToken = 'eMygUQ-CRjiYZR7vSdr9Tj:APA91bE2YMxHBQGfVYIpm5wbVxInTzlUZ5T_9larhkHaXGSIIU4of2DSmimJEIMjhxvw_v3hwp8jMXTZ7gxCsmVARAGYOyGVTU2LEwrBlXO4prmytCzIekyaUOs3zGLMcj8R7dO4VtFo';

var message = {
  data: {
    title: '850',
    body: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });