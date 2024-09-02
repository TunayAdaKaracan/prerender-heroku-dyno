#!/usr/bin/env node
var prerender = require('./lib');
const chromiumBinary = require('chromium-binary');

console.log(chromiumBinary.path)

var server = prerender({chromeLocation: chromiumBinary.path, port: parseInt(process.argv[2] || "3000") || 3000});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.addMetaTags());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start()
