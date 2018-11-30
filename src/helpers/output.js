import { isUndefined, find, isObject, cloneDeep } from 'lodash';
import { logTweets as logTweetsToConsole } from './util';
import { logUser as logUserToConsole } from './util';
import { sortArray as sortArrrayByIndex } from './util';
import { updateTweetArray as updateTweetArray } from './util';

export default {
    outputToConsole(allUsers, userData, tweetData) {
        // Short Circuit Function if there is missing data and display and error message in the console
        if (isUndefined(allUsers) || isUndefined(userData) || isUndefined(tweetData)) {
            return console.error('There is data missing, could not output to console!'); // eslint-disable-line
        }

        allUsers.forEach(user => {
            let followerTweets = [];
            let userTweets = [];
            // output user to console
            logUserToConsole(user);
            // find user data
            const findUser = find(userData, { user });
            if (isObject(findUser)) {
              // get users followers
                const followers = findUser.followers;
                // clone tweetData collection to avoid mutating original dataset
                const allTweets = cloneDeep(tweetData);
                // add an index to each tweet to determine the order they are displayed in the console
                allTweets.forEach((item, index) => {
                    item.index = index;
                });

                // Check if single follower or array of followers
                if (!Array.isArray(followers)) {
                    const getUserTweets = allTweets.filter(tweet => tweet.user === user);
                    const getFollowerTweets = allTweets.filter(tweet => tweet.user === followers);

                    // push follower tweeets to new array
                    updateTweetArray(getFollowerTweets, followerTweets);
                    // push user tweeets to new array
                    updateTweetArray(getUserTweets, userTweets);
                } else {
                    const getUserTweets = allTweets.filter(tweet => tweet.user === user);
                    // push user tweeets to new array
                    updateTweetArray(getUserTweets, userTweets);
                    followers.forEach(name => {
                        const getFollowerTweets = allTweets.filter(tweet => tweet.user === name);
                        // push follower tweeets to new array
                        updateTweetArray(getFollowerTweets, followerTweets);
                    });
                }

                const outPutData = userTweets.concat(followerTweets);
                const sortedArray = sortArrrayByIndex(outPutData);
                // output user / follower tweets
                if (Array.isArray(sortedArray)) {
                    logTweetsToConsole(sortedArray);
                }
            }
        });
    }
};