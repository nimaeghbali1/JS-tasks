const userList = []
let user1 = {
        name : "nima",
        age : 30,
        id : "a-100",
        major : "computer"
    }
    
let user2 = {
    name : "amir",
    age : 19,
    id : "a-101",
    major : "art"
}
let user3 ={
    name : "sina",
    age : 20,
    id : "a-102",
    major : "mathematics"
}

// Create

const creatUser = (name , age , id , major) =>{
    const extraUser = {
        name : name,
        age : age ,
        id : id,
        major : major
    }
    userList.push(extraUser)
    return userList
}

// Remove

const removeUser = () =>{  
    userList.pop()
    return userList

}

// Update

const updateUser = (objname, name1 , age1 , id1 , magor1)=>{
    objname = {
        name : name1,
        age : age1,
        id : id1,
        magor : magor1
    }
    userList.pop()
    userList.push(objname)
    return userList
}
userList.push(user1 , user2 , user3)