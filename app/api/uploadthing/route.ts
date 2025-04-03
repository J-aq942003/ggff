import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { NextRequest, NextResponse } from "next/server";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // Apply an (optional) custom config:
  // config: { /*callbackUrl*/ },
});

//OR u can do this instead:-
/*
export async function GET(req: NextRequest) { 
  //  const body = await req.json(); // Read and parse the JSON body
   router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
  //  return NextResponse.json({});
}

export async function POST(req: NextRequest) {    
   router: ourFileRouter,
  // Apply an (optional) custom config:
  // config: { ... },
  //  return NextResponse.json({});
}
*/
