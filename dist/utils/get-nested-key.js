"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedKey = void 0;
/**
 * { error: { notFound: 'Message not found!' } }
 * 		= __('error.notFound')
 *
 * { error: { 'not.found': 'Message not found!' } }
 * 		= __('error.not.found')
 *
 * { error: { 'string.validate': { 'not.found': 'Message not found!' } } }
 * 		= __('error.string.validate.not.found')
 */
function getNestedKey(key, localeData) {
    const jsonPath = key.split('.');
    let currentPath = [];
    let jsonObject = localeData;
    for (const path of jsonPath) {
        if (jsonObject && jsonObject[path]) {
            jsonObject = jsonObject[path];
            currentPath = [];
        }
        else {
            /*
             * Checks if the joined path equals a key. f.ex. `not.found`
             */
            currentPath.push(path);
            const currentPathString = currentPath.join('.');
            if (jsonObject && jsonObject[currentPathString]) {
                jsonObject = jsonObject[currentPathString];
                currentPath = [];
            }
        }
    }
    if (typeof jsonObject !== 'string') {
        return undefined;
    }
    return jsonObject;
}
exports.getNestedKey = getNestedKey;
