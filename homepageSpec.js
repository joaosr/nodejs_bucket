describe('angularjs homepage', function() {
    it('should have a title', function() {
        browser.get('http://www.angularjs.org');
        expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    });
});
