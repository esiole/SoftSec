function clearComments(src, lang) {
    switch (lang) {
        case "js": {
            src = clearCStyleComments(src);
            break;
        }
        case "py": {
            src = clearPythonComments(src);
            break;
        }
        case "cs": {
            src = clearCStyleComments(src);
            break;
        }
        case "java": {
            src = clearCStyleComments(src);
            break;
        }
        case "xml": {
            src = clearXMLComments(src);
            break;
        }
    }
    return src;
}

function clearCStyleComments(src) {
    src = src.replace(/\/\/.*/g, "");
    src = src.replace(/\/\*.*\*\//gs, "");
    return src;
}

function clearPythonComments(src) {
    src = src.replace(/#.*/g, "");
    return src;
}

function clearXMLComments(src) {
    src = src.replace(/<!--.*-->/gs, "");
    return src;
}

module.exports = {
    clearComments: clearComments
};