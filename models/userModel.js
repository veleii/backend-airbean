import Datastore from 'nedb-promises';

const usersDB = new Datastore({ filename: './users.db', autoload: true });

export async function createUser(user) {
    return await usersDB.insert(user)
}

