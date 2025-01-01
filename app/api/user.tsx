"use server";

import { UserBasicData } from "../interface/interface";
import fs from "fs";

const dbPath = "./database.db";
const tempDbPath = "./database.db.tmp";

type DbStructure = {
    Users: {
        [address: string]: UserBasicData;
    };
    numberOfUsers: number;
};

export const SaveUserData = async (userData: UserBasicData) => {
    try {
        if (!fs.existsSync(dbPath)) {
            fs.writeFileSync(dbPath, JSON.stringify({ Users: {}, numberOfUsers: 0 }));
        }

        const rawData = fs.readFileSync(dbPath).toString();
        const data: DbStructure = JSON.parse(rawData);

        data.Users[userData.address] = userData;

        if (!Object.prototype.hasOwnProperty.call(data.Users, userData.address)) {
            data.numberOfUsers++;
        }

        fs.writeFileSync(tempDbPath, JSON.stringify(data));

        fs.renameSync(tempDbPath, dbPath);

        return { success: true, response: "User data saved successfully." };
    } catch (error) {
        console.error("Error saving user data:", error);
        return { success: false, response: (error as Error).message };
    }
};

export const GetUserData = async (address: string) => {
    try {
        if (!fs.existsSync(dbPath)) {
            throw new Error("Database file does not exist.");
        }

        const rawData = fs.readFileSync(dbPath).toString();
        const data: DbStructure = JSON.parse(rawData);

        if (!data.Users[address]) {
            throw new Error(`No user found with address: ${address}`);
        }

        return { success: true, response: data.Users[address] };
    } catch (error) {
        console.error("Error retrieving user data:", error);
        return { success: false, response: (error as Error).message };
    }
};
