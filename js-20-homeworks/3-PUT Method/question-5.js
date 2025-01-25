//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

async function updateUser () {
    const userId = 1; 
    const url = `https://67953225aad755a134eb7729.mockapi.io/api/form/userform/${userId}`; 

    const updatedData = {
        firstName: "Lufy",
        lastName: "Monkey D.",
        phone: "(945) 635-3854"
    };

    try {
        const response = await fetch(url, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData), 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('User  updated:', data);
        alert('User  updated successfully!');
    } catch (error) {
        console.error("Error updating user:", error);
        alert('Update failed. Please try again.');
    }
}


updateUser ();


//*To be continue...
