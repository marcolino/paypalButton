describe('paypalButton', function () {
  ptor = protractor.getInstance();

  beforeEach(function() {
    ptor.get('/#');
    browser.waitForAngular();
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