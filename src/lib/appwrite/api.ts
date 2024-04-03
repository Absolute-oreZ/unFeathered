import { ID, Query } from "appwrite";
import { appwriteConfig, account, databases, avatars } from "./config";
import { INewUser } from "@/types";

// ============================================================
// AUTH
// ============================================================

// ============================== SIGN UP
export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        });

        return newUser;
    } catch (error) {
        console.log(error);
        return error;
    }
}

// ============================== SAVE USER TO DB
export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: URL;
    username?: string;
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        );

        return newUser;
    } catch (error) {
        console.log(error);
    }
}

// ============================== SIGN IN
export async function signInAccount(user: { email: string; password: string }) {
    try {
        // @ts-ignore
        const session = await account.createEmailSession(user.email, user.password);

        return session;
    } catch (error) {
        console.log(error);
    }
}

// ============================== GET ACCOUNT
export async function getAccount() {
    try {
        const currentAccount = await account.get();
        console.log(currentAccount.$id);
        return currentAccount;
    } catch (error) {
        console.log(error);
    }
}

// ============================== GET USER
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}


// ============================== SIGN OUT
export async function signOutAccount() {
    try {
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        console.log(error);
    }
}

// ============================================================
// USER
// ============================================================

// ============================== GET USERS
export async function getUsers(limit?: number) {
    const queries: any[] = [Query.orderDesc("$createdAt")];

    if (limit) {
        queries.push(Query.limit(limit));
    }

    try {
        const users = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            queries
        );

        if (!users) throw Error;

        return users;
    } catch (error) {
        console.log(error);
    }
}

// ============================== GET USER BY ID
export async function getUserById(userId: string) {
    try {
        const user = await databases.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            userId
        );

        if (!user) throw Error;

        return user;
    } catch (error) {
        console.log(error);
    }
}

// ============================================================
// TIP
// ============================================================

// ============================== GET RANDOM TIP
export async function getRandomTip() {
    try {
        const documents = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.tipsCollectionId,
        );
        const randomTip = documents.documents[Math.floor(Math.random() * documents.total)];
        return randomTip;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// ============================== INCREASE TIP POPULARITY
export const increaseTipPopularity = async () => {
    try {
        const randomTip = await getRandomTip();

        if(!randomTip) throw Error;

        // Update the popularity attribute of the tip in Appwrite collection
        const response = await databases.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.tipsCollectionId,
            randomTip.$id,
            {
                popularity: randomTip.popularity + 1,
            }
        );

        console.log('Document updated successfully:', response);
    } catch (error) {
        console.error('Error updating document:', error);
    }
};