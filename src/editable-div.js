import { createElement } from './util.js';

class EditableDiv {
    constructor () {
        this.init();
    }

    init () {
        this.element = createElement('div');
    }
}