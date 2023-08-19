type userType = {
    name : string
    lastName : string
    age : number
    job : string
    maritalStatus : boolean
    gender : "male" | "female"
    height : number
    weight : number
    ID : string
    phone : number
}

const usersList: userType[]=[{
    name : "nima",
    lastName : "zareyee",
    age : 26,
    job : "computer engineer",
    maritalStatus : false,
    gender : "male",
    height : 181,
    weight : 70,
    ID : "a-100",
    phone : 9170000000
},{
    name : "amir",
    lastName : "rezayi",
    age : 19,
    job : "software engineer",
    maritalStatus : false,
    gender : "male",
    height : 183,
    weight : 75,
    ID : "a-101",
    phone : 9360000000
}]

// Creat new user
const creatUser = (user:userType) =>{
    usersList.push(user)
    return usersList
}

// Update user

const updateUser = (id:userType["ID"] , user:userType) =>{
    const userIndex = usersList.findIndex((item) => item.ID === id)
    usersList[userIndex] = {...usersList[userIndex] , ...user }
    return usersList
}

// Remove user

const removeUser = (id:userType["ID"]) => {
    if (id === "a-100"){
        usersList.splice(0,1)
    }
    else if (id === "a-101"){
        usersList.splice(1,2)
    }
    else {
        return "wrong ID"
    }
    return usersList
}

