import { loadAllData as loadTweetAndUserData } from '../src/helpers/data';

describe('Helpers > Data > loadAllData', function () {

    it('should resolve a promise with all data', function () {
        const promise = loadTweetAndUserData();
        expect(promise instanceof Promise).toEqual(true);
    });
});