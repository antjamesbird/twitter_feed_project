import { compact, find, isObject, uniq, trimEnd } from 'lodash';

export default {
    parseTweets(data) {
        // Convert string containing tweet details into an array
        const dataArray = compact(data.split('\n'));
        const tweets = [];
        dataArray.forEach(value => {
            const tweetDetails = value.split('>');
            const user = tweetDetails[0].trim();
            const tweet = tweetDetails[1].trim();
            tweets.push({
                user,
                tweet
            });
        });

        return tweets;
    },

    parseUsers(data) {
        // Convert string containing user details into an array
        const dataArray = compact(data.split('\n'));
        const users = [];
        const usersArray = [];
        // Iterate over each item to get the user and their followers
        dataArray.forEach(value => {
            const userDetails = value.split('follows');
            const user = userDetails[0].trim();
            const followers = userDetails[1].trim();
            // Array to check for existing users
            if (!usersArray.includes(user)) {
                users.push({
                    user,
                    followers
                });
            } else {
                // Find Object Containing Exisitng User
                const existingUser = find(users, { user });
                if (isObject(existingUser)) {
                    // append additional followers to existing value
                    existingUser.followers += `,${followers.replace(' ', '')}`;
                    const string = existingUser.followers.split(',');
                    // Filter out duplicates
                    existingUser.followers = uniq(string);
                }
            }
            usersArray.push(user);
        });
        return users;
    },

    getAllUsers(data) {
        const dataArray = compact(data.split('\n'));
        let allUsers = '';
        // Iterate over each item to get the user and their followers
        dataArray.forEach(value => {
            const userDetails = value.split('follows');
            const user = userDetails[0].trim();
            const followers = userDetails[1].trim();
            allUsers += `${user},${followers.replace(' ', '')},`;
        });
        // Remove Duplicates and sort in Alphabetical Order
        const users = uniq(trimEnd(allUsers, ',').split(',')).sort();
        return users;
    }
};