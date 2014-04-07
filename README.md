# AngularJS paypalBytton Directive
[![Build Status](https://secure.travis-ci.org/angular-ui/bootstrap.png)](http://travis-ci.org/marcolino/paypal-button)

[AngularJS](http://angularjs.org/) directive for the Leaflet Javascript
Library. This software aims to easily embed maps managed by leaflet on your
[Leaflet](http://leaflet.cloudmade.com) project.

See some basic examples:

* [Basic example](http://tombatossals.github.io/angular-leaflet-directive/examples/simple-example.html)
* [Center example](http://tombatossals.github.io/angular-leaflet-directive/examples/center-example.html)
* [Center autodiscover example](http://tombatossals.github.io/angular-leaflet-directive/examples/center-autodiscover-example.html)
* [Center with url hash example](http://tombatossals.github.io/angular-leaflet-directive/examples/url-hash-center-example.html)
* [Custom parameters example](http://tombatossals.github.io/angular-leaflet-directive/examples/custom-parameters-example.html)
* [Bounds example](http://tombatossals.github.io/angular-leaflet-directive/examples/bounds-example.html)
* [MaxBounds example](http://tombatossals.github.io/angular-leaflet-directive/examples/maxbounds-example.html)
* [Tiles example](http://tombatossals.github.io/angular-leaflet-directive/examples/tiles-example.html)
* [Tile zoom changer example](http://tombatossals.github.io/angular-leaflet-directive/examples/tiles-zoom-changer-example.html)

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
