var local_document = document;

export default {
    document: local_document,
    createElement: () => {
        return local_document.createElement;
    }
};