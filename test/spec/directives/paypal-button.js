'use strict';

describe('Directive: paypalButton', function () {

  // load the directive's module
  beforeEach(angular.mock.module('paypalButtonApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope;
    element = angular.element('<div><paypal-button business="email@domain.com" language-code="it_IT" currency-code="EUR" item-name="My nice item description" amount="100">PP</paypal-button></div>');
    $compile(element)($rootScope);
    scope.$digest();
  }));

  it('should contain PayPal form', function() {
    expect(element.html()).toContain('form');
    expect(element.html()).toContain('action="https://www.paypal.com/us/cgi-bin/webscr"');
  });

});