import { addContactBtn, showContactBtn, closeContactBtn } from "./src/importer.js";
import { createNewContactfunc, showDrawerbutton, closeDrawerbutton } from "./src/state.js";
addContactBtn?.addEventListener("click", createNewContactfunc);
showContactBtn?.addEventListener("click", showDrawerbutton);
closeContactBtn?.addEventListener("click", closeDrawerbutton);
