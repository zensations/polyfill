Introduction
============

[Drupal](http://www.drupal.org) module for automatic application of CSS3 polyfills. Uses the **lessphp** preprocessor by [Leaf Corcoran](http://leafo.net/lessphp/), a slightly modified version of CSSParser by [Peter Kröner](https://github.com/SirPepe/CSS-Parser) and [CSSPIE](http://css3pie.com/).


Usage
=====

Install as any other Drupal module. *polyfill* will search for CSS files with extension *.less* and first run the LESS Preprocessor. For information about LESS features please refer to [http://lesscss.org](http://lesscss.org/). The resulting stylesheet will be scanned for CSS3 properties and completed with the corresponding vendor prefixes and polyfills. The preprocessor will recreate *.less* sheets every page request, as long as CSS aggregation is turned off.


Supported properties:
---------------------

* box-shadow
* border-radius
* transform *(vendor prefix only)*
* transition *(vendor prefix only)*
* linear-gradient *(HEX colors only)*


Extending
=========

The function *polyfill_property_hooks* provides an associative array with property names as keys and arrays of function names, which will be called if the preprocessor stumbles upon the property. These property hooks will be provided with the current CSS selector and the current array of properties, passed by reference. For a simple example please refer to *polyfill_pie*.

To add additional polyfills, simply add the properties and function names to *polyfill_property_hooks*. And if you're kind, send it to me (pm@zensations.at), so I can add them to the repository. I decided not to use *drupal_alter*, because scattering polyfills in different modules doesn't make sense to me.


Roadmap
=======

* Support gradients through PIE. Perhaps by porting the [javascript gradient converter](http://leaverou.me/demos/cssgradientsplease/) by Lea Verou, explained [here](http://leaverou.me/2011/03/create-complex-regexps-more-easily/).
* Interface for creating a javascript file with javascript-based polyfills.
* CSS Transforms (... with [Transformie](http://www.transformie.com/)?)
* ... find a polyfill for CSS3 transitions?
* Identify other properties worth including.
