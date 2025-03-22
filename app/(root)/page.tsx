import { Button } from "@/components/ui/button";
import Link from "next/link";
import hero from "../../public/assets/images/hero.png";
import Image from "next/image";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

// const GetFun = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 200));
//   return Math.random();
// };
export default async function Home() {
  /*const todos = await (
    await axios.get("https://jsonplaceholder.typicode.com/todos/2")
  ).data;
  console.log("Home + " + JSON.stringify(todos));*/
  return (
    <>
      <section className="borderff border-black mb-8 pt-16 min-h-[500px]ff w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        <div className="wrapper grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:gap-0 border border-black w-[96%] mx-auto">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-[2.0rem] borderff border-black max-w-[610px]">
              Host, Connect, Celebrate: Your Events, Our Platform! {/*todos.title*/}
            </h1>
            <p className="borderff p-regular-20 md:p-regular-24 maxf-w-[580px]">
              Book and learn helpful tips{" "}
              {/* <Suspense fallback={<p>Loading..........</p>}>
                <GetFun />
              </Suspense>{" "} */}
              from 3168+ mentors in world-class companies with our global
              community.
            </p>
            <Button className="w-full transition-all duration-500 sm:max-w-40 sm:py-6 rounded-3xl">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div className="borderff border-2ff border-black sm:max-w-96ff">
            <Image
              src={hero}
              alt="hero"
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 mt-0 flex flex-col gap-8 md:gap-12"
      >
        <h3 className="h3-bold mb-4ff sm:max-w-[18rem]ff border-2">
          Trusted by <br />
          Thousand of Events
        </h3>
        <div
          // dir="rtl"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 gap-4ff"
        >
          <Input
            type="search"
            placeholder="Search..."
            className="rounded-full max-w-[400px]ff outline-none"
          />
          <Select>
            <SelectTrigger className="rounded-full bg-gray-100 sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>
    </>
  );
}
