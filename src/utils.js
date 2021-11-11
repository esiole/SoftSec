function clearComments(src, lang) {
    switch (lang) {
        case "JS": {
            src = clearCStyleComments(src);
            break;
        }
        case "Python": {
            src = clearPythonComments(src);
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

module.exports = {
    clearComments: clearComments
};