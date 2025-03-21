import { useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const user = (
    await axios.get(
      "https://api.clerk.com/v1/users/user_2uTc8v92jtEFHC8qKmMXjQz3EAL",
      {
        headers: {
          Authorization:
            "Bearer sk_test_YXVoKWhpFOYk7jt6sURlhZFz6Q2NeoPiUyCHqf8lzX",
        },
      }
    )
  ).data;
  // console.log(user.first_name);
  return (
    <div>
      <div className="max-w-[400px] border-2 border-black ">
        Events page {/*JSON.stringify(user)*/ params.id}
      </div>
    </div>
  );
};

export default page;
