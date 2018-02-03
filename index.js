
var util = {
    createElement: (nodeName) => document.createElement(nodeName),
    isDefined: (value) => value === undefined
};

var createElement = util.createElement, isDefined = util.isDefined,
    domStyleProcessor = util.domStyleProcessor;

function DOMOperator(ele) {
    var _this = this;
    _this.element = [ele];
}
DOMOperator.prototype = {
    constructor: DOMOperator,
    width: DOMOperator.domStyleProcessor('width'),
    height: DOMOperator.domStyleProcessor('height')
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
        var _this = this;
        _this.createContainer();
    }

    createContainer () {
        var _this = this;
        var containerEle = createElement('div');
        _this.host.appendChild(containerEle);
        containerEle.className = 'editor-default-size';
        if (isDefined(_this.width)) {
            _(containerEle).width(_this.width);
        }
    }
}

module.exports = CoolEditor;