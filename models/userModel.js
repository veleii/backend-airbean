import Datastore from 'nedb-promises';

const usersDB = new Datastore({ filename: './db/users.db', autoload: true });

export async function createUser(user) {
    return await usersDB.insert(user)
}

export async function getUserByEmail(email) {
    return await usersDB.findOne({ email })
}