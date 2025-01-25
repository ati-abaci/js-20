/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

// const article = document.querySelector("article");

// ! Answer
async function fetchUser() {
    const article = document.querySelector("article");
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (response == 404) {
            throw new Error(`Error: ${response.status}`);
        }
        const users = await response.json()
        users.forEach(user =>{
            const card = document.createElement("div")
            card.classList.add("user-card")
            card.innerHTML = ` <h2> ${user.name}</h2>
            <p>${user.company.name}</p>`
            article.appendChild(card)
            console.log(article);
        })
    }catch(er){
        console.error("Error" , error.message);
        
    }
}
fetchUser()