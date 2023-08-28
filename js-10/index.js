"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importer_js_1 = require("./src/importer.js");
var state_1 = require("./src/state");
importer_js_1.addContactBtn === null || importer_js_1.addContactBtn === void 0 ? void 0 : importer_js_1.addContactBtn.addEventListener("click", state_1.createNewContact);
