import { createElement } from './util.js';

export default class Header {
    constructor (height) {
        var _this = this;
        _this.height = height || 40;
        _this.create();
    }

    create () {
        this.element = createElement('div');
    }

    getDOM () {
        return this.element;
    }
}