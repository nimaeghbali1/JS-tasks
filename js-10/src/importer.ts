import { contactListType } from "./types.js"


export const userName = document.querySelector<HTMLInputElement>("#user-name")
export const userPhone = document.querySelector<HTMLInputElement>("#user-name")
export const userStorage = document.querySelector<HTMLInputElement>("#user-name")
export const addContactBtn = document.querySelector<HTMLButtonElement>("#submit-button")
export const closeContactBtn = document.querySelector<HTMLButtonElement>("#close-button")
export const showContactBtn = document.querySelector<HTMLButtonElement>("#show-button")
export const showDrawer = document.querySelector<HTMLDivElement>("#contact-list-drawer")
export const contactListElement = document.querySelector<HTMLUListElement>("#contact-list")
export const contactList : contactListType = []