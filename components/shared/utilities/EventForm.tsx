"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { eventFormSchema } from "@/lib/validator";
import { eventDefaultValues } from "@/constants";
import DropDown from "./DropDown";
import FileUploader from "./FileUploader";
/////////

const EventForm = ({
  userId,
  type,
}: {
  userId: string;
  type: "Create" | "Update";
}) => {
  //useState's
  const [files, setFiles] = useState<File[]>([]);
  // 1. Define your form.
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: eventDefaultValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="flex flex-col w-full gap-5 border-2 border-red-200"
    //   >
    //     <FormField
    //       control={form.control}
    //       name="title"
    //       render={({ field }) => (
    //         <FormItem>
    //           <div className="flex flex-col border-2 grid-cols-1ff sm:grid-cols-2ff sm:flex-row gap-5">
    //             <FormControl className="rounded-full sm:w-[30rem]">
    //               <Input placeholder="Title" {...field} className="px-4" />
    //             </FormControl>
    //             <FormMessage />
    //             <FormControl>
    //               <DropDown
    //                 value={field.value}
    //                 onChangeHandler={field.onChange}
    //               />
    //             </FormControl>
    //           </div>

    //           <FormControl>
    //             <Textarea
    //               placeholder="Description"
    //               className="min-h-[17rem] rounded-xl"
    //             />
    //           </FormControl>
    //           {/* <FormDescription>
    //             This is your public display name.
    //           </FormDescription> */}
    //           {/* <FormMessage /> */}
    //         </FormItem>
    //       )}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </Form>
    <div className="grid grid-cols-1 sm:grid-cols-2ff gap-5 min-w-full border-2 *:rounded-fullff">
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          type="text"
          placeholder="Title"
          className="w-full rounded-full md:max-w-[30rem]ff"
        />
        <Select>
          <SelectTrigger className="rounded-full bg-gray-100 sm:w-[180px]ff">
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
      <Textarea
        placeholder="Description"
        className="min-h-[17rem] rounded-xl"
      />
      <div className="border-2 border-black">
        <FileUploader imageUrl="" setFiles={() => {}} />
      </div>
    </div>
  );
};

export default EventForm;
