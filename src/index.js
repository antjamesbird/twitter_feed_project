import { loadAllData as loadTweetAndUserData } from './helpers/data';
import ParseMethods from './helpers/parse';
import OutputMethods from './helpers/output';

loadTweetAndUserData().then(data => {
    if (Array.isArray(data)) {
        const tweetData = ParseMethods.parseTweets(data[0]);
        const userData = ParseMethods.parseUsers(data[1]);
        const allUsers = ParseMethods.getAllUsers(data[1]);

        // Output Data to the console
        // Accepts three params (allUsers, userData, tweetData)
        OutputMethods.outputToConsole(allUsers, userData, tweetData);
    }
})
.catch(error => console.error(`The Server responded with the follow error: ${error}`)); // eslint-disable-line