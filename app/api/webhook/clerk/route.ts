import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { Webhook } from "svix";
export async function POST(req: NextRequest) {
  const body = await req.json(); // Read and parse the JSON body

  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env"
    );
  }
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers and body
  const headers = req.headers;
  const payload = req.body;

  // Get Svix headers for verification
  const svix_id = headers.get("svix-id");
  const svix_timestamp = headers.get("svix-timestamp");
  const svix_signature = headers.get("svix-signature");
  // const svix_id = headers["svix-id"];
  // const svix_timestamp = headers["svix-timestamp"];
  // const svix_signature = headers["svix-signature"];

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return void new Response("Error: Missing svix headers", { status: 400 });
  }

  // let evt: any;

  // Attempt to verify the incoming webhook
  // If successful, the payload will be available from 'evt'
  // If verification fails, error out and return error code
  try {
    const evt: any = await wh.verify(JSON.stringify(payload), {
      "svix-id": svix_id as string,
      "svix-timestamp": svix_timestamp as string,
      "svix-signature": svix_signature as string,
    });
    if (evt.type == "user.created") {
      const clerkId: string = evt.data.id;
      const email: string = evt.data.email_addresses[0].email_address;
      const username: string = evt.data.username;
      const firstName: string = evt.data.first_name;
      const lastName: string = evt.data.last_name;
      const avatar: string = evt.data.image_url;
      const createdAt: number = evt.data.created_at;
      const body = {
        clerkId,
        email,
        username,
        firstName,
        lastName,
        avatar,
        createdAt,
      };
      /*await axios.post("http://127.0.0.1:3005", body, {
        headers: { "Content-Type": "application/json" },
      });*/
      console.log("It reached and this is the body: " + body);
    }
    // switch (evt.type) {
    //   case "user.created":
    //     await pushUserToMySQL(body);
    //     break;

    //   default:
    //     break;
    // }
  } catch (err: any) {
    console.log("Error: Could not verify webhook:", err.message);
    return void new Response(`${err.massage}`, { status: 400 });
  }

  // Do something with payload
  // For this guide, log payload to console
  // const { id } = evt.data;
  // const eventType = evt.type;
  // console.log(
  //   `Received webhook with ID ${id} and event type of ${eventType}`
  // );
  // console.log("Webhook payload:", evt.data);
  return void new Response("Webhook received", { status: 200 });
}
