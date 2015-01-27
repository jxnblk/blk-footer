
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

//var pkg = require('./package.json');

module.exports = function(data, options) {

  var data = data || {}; // Generally pass package.json as data
  var options = options || {};


  data.title = data.title || _.capitalize(data.name.replace(/\-/g, ' '));
  data.links = data.links || [];

  //_.assign(data, { footer: pkg });
  //data.related = data.related || data.footer.related;

  if (data.homepage && !data.github) {
    data.github = {
      href: data.homepage,
      name: 'Github'
    };
  }

  data.npm = {
    href: '//npmjs.com/package/' + data.name,
    name: 'NPM'
  };

  var tpl = _.template(fs.readFileSync(path.join(__dirname, './footer.html'), 'utf8'));

  var html = tpl(data);

  return html

};

