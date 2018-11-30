import { logTweets as logTweetsToConsole } from '../src/helpers/util';
import { logUser as logUserToConsole } from '../src/helpers/util';
import { sortArray as sortArrrayByIndex } from '../src/helpers/util';
import { mockArrayToSort as tweetData } from './mocks';
import { updateTweetArray as updateArray } from '../src/helpers/util';

describe('Helpers > Utils > logTweets', function () {

    it('should throw error if incorrect data is passed into logTweets method', function () {
        spyOn(console, 'error');
        logTweetsToConsole('test');
        expect(console.error).toHaveBeenCalledWith('Could not log tweets to console. Incorrect data used, expects an array!'); // eslint-disable-line
    });

    it('should log tweets to the console', function () {
        spyOn(console, 'log');
        logTweetsToConsole(tweetData);
        const arrLength = tweetData.length;
        expect(console.log).toHaveBeenCalledTimes(arrLength); // eslint-disable-line
    });
});

describe('Helpers > Utils > logUser', function () {

    it('should throw error if incorrect data is passed into logUser method', function () {
        spyOn(console, 'error');
        logUserToConsole([]);
        expect(console.error).toHaveBeenCalledWith('Could not log user to console. Incorrect data used, expects a string!'); // eslint-disable-line
    });

    it('should log user to the console', function () {
        spyOn(console, 'log');
        logUserToConsole('Anthony');
        expect(console.log).toHaveBeenCalledWith('Anthony'); // eslint-disable-line
    });
});

describe('Helpers > Utils > updateTweetArray', function () {

    it('should throw error if incorrect data is passed into updateTweetArray method', function () {
        spyOn(console, 'error');
        updateArray();
        expect(console.error).toHaveBeenCalledWith('Could not update tweet array. Incorrect data used, expects two array params!'); // eslint-disable-line
    });

    it('should push array items into new array', function () {
        const newArr = [];
        updateArray(tweetData, newArr);
        expect(tweetData).toEqual(newArr);
    });
});

describe('Helpers > Utils > sortArray', function () {

    it('should throw error if incorrect data is passed into sortArray method', function () {
        spyOn(console, 'error');
        sortArrrayByIndex('test');
        expect(console.error).toHaveBeenCalledWith('Could not sort arrays. Incorrect data used, expects an array!'); // eslint-disable-line
    });

    it('should sort array of tweets in correct order', function () {
        const sortData = sortArrrayByIndex(tweetData);
        expect(sortData).toEqual([
            {user: "Alan", tweet: "If you have a procedure with 10 parameters, you probably missed some.", index: 0},
            {user: "Ward", tweet: "There are only two hard things in Computer Science… invalidation, naming things and off-by-1 errors.", index: 1},
            {user: "Alan", tweet: "Random numbers should not be generated with a method chosen at random.", index: 2}
        ]);
    });
});