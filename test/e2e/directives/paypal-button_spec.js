'use strict';

describe('paypalButton', function () {
  var targetUrl = '/#';
  var ptor = protractor.getInstance();
  beforeEach(function() {
    ptor.ignoreSynchronization = true;
    ptor.get(targetUrl);
  });

  it('PayPal page for business should be loaded', function() {
    $('input[type=image]').click().then(function() {
      browser.driver.getCurrentUrl().then(function(url) {
        expect(url).toContain('paypal.com');
        expect(url).toContain('SESSION=');
        expect(url).toContain('dispatch=');
      });
    }); 
  });

});