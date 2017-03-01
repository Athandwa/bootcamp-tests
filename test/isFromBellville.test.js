describe('isFromBellville', function () {
  it("should return 'true' when given  'registration.startsWith('CY 523519')'", function(){
      assert.equal(isFromBellville('CY 523519'), true);
  });
});
