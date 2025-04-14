import Datastore from 'nedb-promises';

const usersDB = new Datastore({ filename: './db/users.db', autoload: true });

//Skapa användare
export const createUser = async (user) => {
    return await usersDB.insert(user)
}

export async function getUserByEmail(email) {
    return await usersDB.findOne({ email })
}

//Logga in användare
export const fetchUser = async () => {

}

//Hämta aktiv order
export const fetchCurrentOrder = async () => {

}

//Hämta orderhistorik
export const fetchOrderHistory = async () => {}