////////

import IUser from "@/types/user.model";
import { connection } from "./dbConnect";

export const createUser = async (/*body: IUser*/) => {
  try {
    /*clerkId: string;
    email: string;
    username?: string;
    firstName: string;
    lastName: string;
    avatar: string;
    createdAt: number;*/
    const user = await connection.query(
      "insert into user values(?,?,?,?,?,?)",
      [
        "6we8f7g87276amflkn8",
        "test2@outlook.com",
        "test2",
        "test2firstname",
        "test2secname",
        "Nonee",
      ]
    );
    return user;
  } catch (error) {
    return new Error("Error in createUser: " + error);
  }
};
