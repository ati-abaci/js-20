//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
async function deleteFamilyMembers() {
    const apiUrl = 'https://67953225aad755a134eb7729.mockapi.io/api/form/userform'; 
    const familyMemberIds = [1, 2, 3]; 

    for (const id of familyMemberIds) {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Error deleting user with ID ${id}: ${response.status}`);
            }

            console.log(`User  with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    }
}

deleteFamilyMembers();

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
async function deleteEvenIdEmployees() {
    const apiUrl = 'https://67953225aad755a134eb7729.mockapi.io/api/form/userform'; 

    try {
        // Fetch all users
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching users: ${response.status}`);
        }

        const users = await response.json();

        // یوزر هایی که ای دی آن ها زوج بود فیلتز و حذف شوند
        for (const user of users) {
            const userId = parseInt(user.id); 
            if (userId % 2 === 0) { 
                const deleteResponse = await fetch(`${apiUrl}/${userId}`, {
                    method: 'DELETE',
                });

                if (!deleteResponse.ok) {
                    throw new Error(`Error deleting user with ID ${userId}: ${deleteResponse.status}`);
                }

                console.log(`User  with ID ${userId} deleted successfully.`);
            }
        }
    } catch (error) {
        console.error('Failed to delete even ID employees:', error);
    }
}


deleteEvenIdEmployees();


//*End of story :)

