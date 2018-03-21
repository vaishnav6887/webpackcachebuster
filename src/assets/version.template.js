const fs = require('fs');

class VersionTemplatePlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        let opt = this.options;
        compiler.plugin("emit", function (compilation, callback) {
            if (compilation.assets && typeof compilation.assets === 'object') {
                let key = Object.keys(compilation.assets)[0];
                let keyObject = {};
                if (key) {
                    keyObject.jsUrl = key;
                }
                fs.writeFileSync(opt.path + '/version.json', JSON.stringify(keyObject));
            }
            
            callback();
        });
    }
}

module.exports = VersionTemplatePlugin;