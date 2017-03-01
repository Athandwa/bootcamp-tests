describe('isFromPaarl', function() {
    it("should return 'true' when given 'registration.startsWith('CJ 98912')'", function() {
        assert.equal(isFromPaarl('CJ 98912'), true);
    });
});
