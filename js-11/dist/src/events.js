import { userName, userPhone, userStorage, showDrawer } from "./importer.js";
import { contactList } from "./types.js";
import { contactListElement } from "./importer.js";
export const creatDraverUserEvent = (event) => {
    event?.preventDefault();
    const newContact = {
        id: crypto.randomUUID(),
        contactName: userName?.value ?? "",
        phoneNumber: userPhone?.value ?? "",
        storage: userStorage?.checked ? "SIM" : "Device"
    };
    if (newContact.contactName, newContact.phoneNumber) {
        contactList.push(newContact);
        const listItem = document.createElement("li");
        listItem.className = "px-4 py-2 bg-purple-300 w-1/3 mb-4 rounded-lg";
        const contactNameElement = document.createElement("h1");
        contactNameElement.className = "text-gray-900 font-medium text-center";
        contactNameElement.innerText = newContact.contactName;
        const contactPhoneElement = document.createElement("h4");
        contactPhoneElement.className = "text-gray-700 text-center";
        contactPhoneElement.innerText = newContact.phoneNumber.toString();
        listItem.appendChild(contactNameElement);
        listItem.appendChild(contactPhoneElement);
        contactListElement?.appendChild(listItem);
        alert("contact has been added succesfully!");
    }
    else
        alert("please fill inputes then try again!");
};
export const closeDrawerButtonEvents = () => {
    showDrawer?.classList.remove("bottom-0");
    showDrawer?.classList.add("bottom-[-140px]");
};
export const showDrawerButtonEvents = () => {
    showDrawer?.classList.remove("bottom-[-140px]");
    showDrawer?.classList.add("bottom-0");
};
