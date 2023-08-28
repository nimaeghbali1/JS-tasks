"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewContact = void 0;
var importer_js_1 = require("./importer.js");
var types_js_1 = require("./types.js");
var createNewContact = function () {
    var _a, _b;
    var newContact = {
        id: crypto.randomUUID(),
        contactName: (_a = importer_js_1.userName === null || importer_js_1.userName === void 0 ? void 0 : importer_js_1.userName.value) !== null && _a !== void 0 ? _a : "",
        phoneNumber: (_b = importer_js_1.userPhone === null || importer_js_1.userPhone === void 0 ? void 0 : importer_js_1.userPhone.value) !== null && _b !== void 0 ? _b : "",
        storage: (importer_js_1.userStorage === null || importer_js_1.userStorage === void 0 ? void 0 : importer_js_1.userStorage.checked) ? "SIM" : "Device"
    };
    types_js_1.contactList.push(newContact);
    console.log(types_js_1.contactList);
};
exports.createNewContact = createNewContact;
