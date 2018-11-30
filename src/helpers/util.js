// Utility For Logging Tweets to the Console. Accepts an array param
export const logTweets = data => {
  // Short Circuit function if incorrect data is passed in
    if (!Array.isArray(data)) {
    return console.error('Could not log tweets to console. Incorrect data used, expects an array!'); // eslint-disable-line
    }
    return data.forEach(({ user, tweet }) => console.log(`\t@${user}: ${tweet}`)); // eslint-disable-line
};

// Utility For Logging Users to the Console. Accepts string param
export const logUser = user => {
  // Short Circuit function if incorrect data is passed in
    if (typeof user !== 'string') {
        return console.error('Could not log user to console. Incorrect data used, expects a string!'); // eslint-disable-line
    }
  return console.log(user); // eslint-disable-line
};

// Utility For Pushing Tweets into a new array, accepts two array params
export const updateTweetArray = (arr1, arr2) => {
    // Short Circuit function if incorrect data is passed in
    if (!Array.isArray(arr1) && !Array.isArray(arr1)) {
        return console.error('Could not update tweet array. Incorrect data used, expects two array params!'); // eslint-disable-line
    }
    return arr1.forEach(el => arr2.push(el));
};

// Utility for sorting Tweets by Index. Accepts an array param
export const sortArray = data => {
    // Short Circuit function if incorrect data is passed in
    if (!Array.isArray(data)) {
        return console.error('Could not sort arrays. Incorrect data used, expects an array!'); // eslint-disable-line
    }
    const newArr = [];
    const arrLength = data.length;
    let count;
    data.forEach((item, index) => {
        const findEl = data.find(value => value.index === index);
        if (findEl !== undefined) {
            newArr.push(findEl);
        } else {
            count = index + 1;
            if (count <= arrLength) {
                const searchWithNewIndex = data.find(value => value.index === count);
                if (searchWithNewIndex) {
                    newArr.push(searchWithNewIndex);
                }
            }
        }
    });
    return newArr;
};