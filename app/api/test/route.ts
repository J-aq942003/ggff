import { NextRequest, NextResponse } from "next/server";

////////
export function GET() {
  // if (req.method === "GET") {
  //   res.status(200).json({ message: "GET request to /api/user" });
  // } else {
  //   res.status(405).json({ message: "Method Not Allowed" });
  // }
  return NextResponse.json({ msg: "hi GET" });
}
export async function POST(req: NextRequest) {
  const body = await req.json(); // Read and parse the JSON body
  // if (req.method === "GET") {
  //   res.status(200).json({ message: "GET request to /api/user" });
  // } else {
  //   res.status(405).json({ message: "Method Not Allowed" });
  // }
  console.log("Hello + " + JSON.stringify(body));
  return NextResponse.json({ msg: "hi POST", body: body });
}
