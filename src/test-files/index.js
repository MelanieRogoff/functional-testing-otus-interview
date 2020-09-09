const { assessment } = require('./assessment');

assessment("chrome");
assessment("firefox");

//NOTE: In Firefox, when entering incorrect credentials, the incorrect credential pop-up appears and stays in the view until a user deletes it, even if they are in the app after having logged in with correct credentials.
