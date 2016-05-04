'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('controllerTestingApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should start with an empty list of persons in the scope', function () {
    expect(scope.persons).toBeDefined();
    expect(scope.persons.length).toBe(0);
  });

  it('should generate a random string of the specified maximum length', function () {
		var s = scope.generateRandomString(10);
    expect(s.length).not.toBeLessThan(1);
    expect(s.length).not.toBeGreaterThan(10);
  });

  it('should generate a random number within the specified range', function () {
		var n = scope.generateRandomNumber(1, 100);
    expect(n).not.toBeLessThan(1);
    expect(n).not.toBeGreaterThan(100);
  });

  it('should be able to add a person to the list', function () {
		scope.add();
    expect(scope.persons.length).toBe(1);
  });

  it('should be able to remove a person to the list', function () {
		scope.add();
		scope.add();
		scope.add();
    expect(scope.persons.length).toBe(3);
		scope.remove(scope.persons[0]);
    expect(scope.persons.length).toBe(2);
  });
});
