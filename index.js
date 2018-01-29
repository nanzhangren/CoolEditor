
var util = {
    local_document: document,
    createElement: () => { return util.local_document.createElement; }
};

class CoolEditor {
    constructor(host, width, height) {
        var _this = this;
        _this.host = host;
        _this.width = width || 900;
        _this.height = height || 580;
        _this.create();
    }

    create() {
        var _this = this;
        var container = createElement('section');

        var editorHeader = new Header(38);
        container.appendChild(editorHeader.getDOM());s

        var editorBody = new Body(_this._height - editorHeader.height);
        container.appendChild(editorBody.getDOM());

        _this.host.appendChild(container);
    }
}

module.exports = CoolEditor;