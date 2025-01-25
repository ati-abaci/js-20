// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */
async function addFamilyMembers() {
    const apiUrl = 'https://67953225aad755a134eb7729.mockapi.io/api/form/userform'; 


    for (const user of users) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Added user:', data);
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    }
}

addFamilyMembers(users);

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...


const phoneInput = document.createElement("input");
phoneInput.type = "tel";
phoneInput.classList.add("phoneInput");

const phoneLabel = document.createElement("label"); 
phoneLabel.classList.add("phoneLabel"); 
phoneLabel.textContent = "Phone number:";


const form = document.querySelector("form");
form.appendChild(phoneLabel);
form.appendChild(phoneInput);


const submitButton = document.createElement("button");
submitButton.textContent = "Submit"; 
submitButton.type = "submit"; 
form.appendChild(submitButton);


form.addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const phone = phoneInput.value; 

    const userData = {
        firstName: firstName,
        lastName: lastName,
        phone: phone
    };

    const url = "https://67953225aad755a134eb7729.mockapi.io/api/form/userform"; 
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('User  signed up:', data);
        alert('Signup successful!');
    } catch (error) {
        console.error("Error signing up:", error);
        alert('Signup failed. Please try again.');
    }
});
