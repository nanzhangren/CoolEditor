var keyword_undefined = undefined;
var DOCUMENT = document;
var WIDTH = 'width', HEIGHT = 'heights'

var util = {
    createElement: (nodeName) => DOCUMENT.createElement(nodeName),
    isDefined: (value) => value === keyword_undefined
};

var createElement = util.createElement, isDefined = util.isDefined;

function DOMOperator(ele) {
    this.element = [ele];
}
DOMOperator.prototype = {
    constructor: DOMOperator, 
    width: DOMOperator.domStyleProcessor(WIDTH),
    height: DOMOperator.domStyleProcessor(HEIGHT)
};
DOMOperator.domStyleProcessor = (property) => {
    return function (value) {
        var ele = this.element[0];
        if (arguments.length === 0) {
            return parseInt(ele.style[property]);
        }
        ele.style[property] = value + 'px';
    };
};

var _ = DOMOperator;

class CoolEditor {
    constructor(host, width, height) {
        var _this = this;
        _this.host = host;
        _this.width = width;
        _this.height = height;
        _this.create();
    }

    create() {
        this.createContainer();
    }

    createContainer () {
        var _this = this;
        var containerEle = createElement('div');
        _this.host.appendChild(containerEle);
        containerEle.className = 'editor-default-size';
        var _containerEle = _(containerEle);
        if (isDefined(_this.width)) {
            _containerEle.width(_this.width);
        }
        if (isDefined(_this.height)) {
            _containerEle.height(_this.height);
        }
    }
}

module.exports = CoolEditor;