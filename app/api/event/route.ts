import { NextRequest, NextResponse } from "next/server";
import { connection } from "../_db/dbConnect";
import { createUser } from "../_db/user.actions";

export async function GET(req: NextRequest) {
  // const body = await req.json(); // Read and parse the JSON body
  try {
    const user = await connection.query("select * from user where email = ?", [
      "test2@outlook.com",
    ]);
    // const user = await createUser();
    return NextResponse.json({ user: user[0] });
  } catch (error) {
    return NextResponse.json({ msg: "Error in sql: " + error });
  }
  // return NextResponse.json({ msg: "process.env.MYSQLUSER" });
}
export async function POST(req: NextRequest) {
  const body = await req.json(); // Read and parse the JSON body
  return NextResponse.json({});
}
