import { Client, Account, Databases } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('657450ac983c321ab276');

export const account = new Account(client);
export const database = new Databases(client);