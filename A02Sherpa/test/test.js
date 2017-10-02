QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateSalary function with several sets of inputs', function (assert) {
    assert.equal(salary(5, 5), 25, 'Tested with two relatively small positive numbers');
    assert.equal(salary(99, 40), 3960, 'Tested with two large positive numbers.');
   });
