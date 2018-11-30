import ParseMethods from '../src/helpers/parse';
import { mockTweetString as tweetString } from './mocks';
import { mockUserString as userString } from './mocks';

describe('Helpers > Parse > parseTweets', function () {

    it('should return and array of tweets', function () {
        const tweets = ParseMethods.parseTweets(tweetString);
        expect(tweets).toEqual([{ user: 'Alan', tweet: 'If you have a procedure with 10 parameters, you probably missed some.' },
        { user: 'Ward', tweet: 'There are only two hard things in Computer Science: cache invalidation, naming things and off-by-1 errors.' },
        { user: 'Alan', tweet: 'Random numbers should not be generated with a method chosen at random.'}]
        );
    });
});

describe('Helpers > Parse > parseUsers', function () {

    it('should return and array of users', function () {
        const users = ParseMethods.parseUsers(userString);
        expect(users).toEqual([{ user: 'Ward', followers: [ 'Alan', 'Martin' ] },
        { user: 'Alan', followers: 'Martin' }]
        );
    });
});

describe('Helpers > Parse > getAllUsers', function () {

    it('should return and array of all users', function () {
        const users = ParseMethods.getAllUsers(userString);
        expect(users).toEqual([ 'Alan', 'Martin', 'Ward' ]);
    });
});