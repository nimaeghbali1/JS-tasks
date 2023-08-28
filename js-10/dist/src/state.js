import { userName, userPhone, userStorage, showDrawer, contactListElement } from "./importer.js";
import { contactList } from "./types.js";
export const createNewContactfunc = (event) => {
    event.preventDefault();
    const newContact = {
        id: crypto.randomUUID(),
        contactName: userName?.value ?? "",
        phoneNumber: userPhone?.value ?? "",
        storage: userStorage?.checked ? "SIM" : "Device"
    };
    contactList.push(newContact);
    const listItem = document.createElement("li");
    listItem.className = "px-4 py-2 bg-blue-200 rounded-lg";
    const contactNameElement = document.createElement("h1");
    contactNameElement.className = "text-gray-950";
    contactNameElement.innerText = `Name : ${newContact.contactName}`;
    const contactPhoneElement = document.createElement("h4");
    contactPhoneElement.className = "text-gray-700";
    contactPhoneElement.innerText = `Phone number : ${newContact.phoneNumber.toString()}`;
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneElement);
    contactListElement?.appendChild(listItem);
};
export const showDrawerbutton = () => {
    showDrawer.classList.remove("hidden");
};
export const closeDrawerbutton = () => {
    showDrawer.classList.add("hidden");
};
//# sourceMappingURL=state.js.map