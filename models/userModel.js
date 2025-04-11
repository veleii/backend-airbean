import Datastore from 'nedb-promises';

const usersDB = new Datastore({ filename: './db/users.db', autoload: true });


export async function createUser(user) {
    return await usersDB.insert(user)
}

