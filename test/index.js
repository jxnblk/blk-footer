
var fs = require('fs');
var path = require('path');
var footer = require('..');

var data = require('../package.json');

/*
data.related = [
  { name: 'Basscss', href: '//basscss.com' },
  { name: 'Geomicons', href: '//geomicons.com' },
  { name: 'CSS Stats', href: '//cssstats.com' },
  { name: 'Plangular', href: '//cssstats.com' },
  { name: 'Fitter Happier Text', href: '//jxnblk.com/fitter-happier-text' },
  { name: 'Loading', href: '//jxnblk.com/loading' },
];
*/

var options = {};

var result = footer(data, options);

fs.writeFileSync(path.join(__dirname, 'rendered.html'), result);

console.log(result);
