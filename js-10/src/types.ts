export type userProps = {
    id : string
    contactName : string
    phoneNumber : string | number
    storage : "SIM" | "Device"
}   

export type contactListType = userProps[]

export const contactList : contactListType = []