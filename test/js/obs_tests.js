'use strict';

describe('OBS class test suite', function() {

    it('Test OBS constructor', function() {

        var obs = new OBS('test');

        expect(obs).toBeTruthy();
        expect(obs.testString).toEqual('Test success.');
    });

    it('Test constructor with bad path', function(done) {

        new OBS('/base/test/data/catalog.bob', function(loadResult) {

            expect(loadResult).toEqual('Failed: status = "error", message = "Not Found".');

            done();
        });
    });

    it('Test constructor with good path', function(done) {

        new OBS('/base/test/data/catalog.json', function(loadResult) {

            expect(loadResult).toEqual('Successfully loaded catalog data.');

            done();
        });
    });
});
