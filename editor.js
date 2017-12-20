(function (context) {

    "use strict";

    var createElement = document.createElement;

    class EmbeddedEditor {
        constructor (host) {
            this._host = host;
        }

        create() {
            return createElement('main');
        }
    }

    context.MessageEditor = EmbeddedEditor;

})(this);