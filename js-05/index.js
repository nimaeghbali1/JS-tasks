const generateRandomName=()=> {
    const name = ["amir" , "ariya" , "nima"]
    const lastName = ["amini" , "mohamamdi" , "didari"]
    const randomlastName = lastName[Math.floor(Math.random() * lastName.length)]
    const randomName = name[Math.floor(Math.random() * name.length)]
    
    return randomName + " " + randomlastName;
}

const generateRandomNumber = ()=>{
    const min = 1
    const max = 100

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
}

const generateRandomDate =()=>{
    const start = new Date(2020, 0, 1); 
    const end = new Date(2023, 11, 31);

    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const year = randomDate.getFullYear();
    const month = String(randomDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(randomDate.getDate()).padStart(2, '0');

    return year + "-" + month + "-" + day;

}

const infoPush = () =>{
    const info = {
        Name : generateRandomName(),
        Number : generateRandomNumber(),
        Date : generateRandomDate()
    }
    const infoarry = []

    infoarry.push(info)
    return infoarry

}


console.log(infoPush())

