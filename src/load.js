/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2013, Juerg Lehni & Jonathan Puckey
 * http://lehni.org/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

// This file uses PrePro to preprocess the paper.js source code on the fly in
// the browser, avoiding the step of having to manually preprocess it after each
// change. This is very useful during development of the library itself.

if (!window.include) {
	var scripts = document.getElementsByTagName('script');
	var src = scripts[scripts.length - 1].getAttribute('src');
	// Assume that we're loading load.js from a root folder, either through
	// dist/paper.js symbolic link, or directly through src/load.js, and match
	// root as all the parts of the path that lead to that folder.
	var root = src.match(/^(.*\/)\w*\//)[1];
	// First load the PrePro's load.js file, which provides the include()
	// function for the browser.
	document.write('<script type="text/javascript" src="' + root + 'node_modules/prepro/lib/load.js"></script>');
	// Now that we have include(), load this file again, which will execute the
	// lower part of the code the 2nd time around.
	document.write('<script type="text/javascript" src="' + root + 'src/load.js"></script>');
} else {
	include('options.js');
	include('paper.js');
}
