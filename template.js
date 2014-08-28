'use strict';
!function(name, definition) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition;
    }
    else {
        var global = this, old = global[name];
        definition.noConflict = function () {
            global[name] = old;
            return definition;
        };
        global[name] = definition;
    }
}('module_name', function() {

    return {};
}());
