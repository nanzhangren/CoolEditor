import { createElement } from './util.js';

class EmbeddedEditor {
    constructor(host) {
        this._host = host;
    }

    create() {
        return createElement('div');
    }
}

module.exports = EmbeddedEditor;