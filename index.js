const template = require('./lib/index');
const extension = require('./lib/extension');

template.extension = extension;
if (require.extensions) {
    require.extensions[template.defaults.extname] = extension;
}
module.exports = template;
