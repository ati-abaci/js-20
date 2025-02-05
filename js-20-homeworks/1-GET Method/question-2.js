/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
async function fetchUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (response == 404) {
            throw new Error(`status: ${response.status}`);
        }
        const users = await response.json()
        console.log(users);
    }catch(er){
        console.log("error:",er.message);
    }
    
}
fetchUsers()

