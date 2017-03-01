describe('isWeekday', function() {
  it("should return 'true' when given '!Day.startsWith('S')'", function (){
      assert.equal(isWeekday('Monday'), true);
  });
});
