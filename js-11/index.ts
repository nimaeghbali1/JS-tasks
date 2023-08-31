import { addContactBtn, showContactBtn, userName , userPhone , userStorage , showDrawer , closeContactBtn} from "./src/importer.js";
import { contactListType , contactList , userProps} from "./src/types"
import { createNewContactfunc , showDrawerbutton , closeDrawerbutton} from "./src/state.js";

addContactBtn?.addEventListener("click" , createNewContactfunc)

showContactBtn?.addEventListener("click" , showDrawerbutton)

closeContactBtn?.addEventListener("click" , closeDrawerbutton)