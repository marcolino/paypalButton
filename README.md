# AngularJS paypalBytton Directive
[![Build Status](https://travis-ci.org/marcolino/paypalButton.svg?branch=master)](https://travis-ci.org/marcolino/paypalButton)

#### A directive to easily create a PayPal "Pay Now" button.
-
<!--
Usage

  - bower install --save paypal-button
  - Add ms.paypal-button to your application's module dependencies.
  - Include dependencies in your HTML.
  - Use the paypal-button directive.
-->

Usage example:
```html
<paypal-button business="myemail@mydomain.com" language-code="it_IT" currency-code="EUR" item-name="My nice item description" amount="100"></paypal-button>
```
-

Attributes
---

 - business
                    your PayPal business email

 - language-code
                    the code of the language of the button text

 - currency-code
                    the code of the currency you specify the amount (see below)

 - item-name
                    the description of the selling item

 - amount
                    the price amount of the item (the currency is specified in currency-code)
