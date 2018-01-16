import { createElement } from './util.js';

export default class Body {
    constructor (height) {
        var _this = this;
        _this.height = height || 540;
        _this.create();
    }

    create () {
        var _this = this;
        var element = _this.element = createElement('div');
        element.
    }

    getDOM () {
        return this.element;
    }
}