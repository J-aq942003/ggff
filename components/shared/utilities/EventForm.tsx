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
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { AlertDialogDemo } from "./AlertDialog";
import InputWithIcon from "./InputWithIcon";
import calender from "@/public/assets/icons/date-svgrepo-com.svg";
import DatePicker from "react-datepicker";
import priceIcon from "@/public/assets/icons/dollar-sign-money-svgrepo-com.svg";
import urlIcon from "@/public/assets/icons/link-svgrepo-com (2).svg";
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
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
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
  const addNewCategoryOnClick = () => {};
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
          className="w-full text-[16px] rounded-full md:max-w-[30rem]ff"
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
              <AlertDialogDemo />
              {/* <button
                value="pineapple"
                className="ml-3 mb-3 mt-1.5 transition-all duration-200 hover:bg-[#6C757D] hover:text-white px-3 py-1.5
                 rounded-md border border-[#6C757D] text-black text-sm"
              >
                + Add New Category
              </button> */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="wrapper grid gap-5 border-2 sm:grid-cols-2 md: *:text-[16px]">
        <Textarea
          placeholder="Description"
          className="min-h-[17rem] text-[16px] rounded-xl"
        />
        <div className="border-2ff border-black">
          {files.length == 0 ? (
            <FileUploader imageUrl="" setFiles={() => {}} />
          ) : (
            <h1>Yessss</h1>
          )}
        </div>
      </div>
      <div className="wrapper text-[16px]">
        <InputWithIcon placeHolder="Event location or Online" />
      </div>

      <div className="wrapper grid gap-5 sm:grid-cols-2">
        <InputWithIcon
          icon={calender}
          placeHolder="Start Date"
          width={20}
          hight={20}
        >
          <DatePicker
            selected={startDate}
            dateFormat="dd/MM/yyyy h:mm a"
            onChange={(date) => {
              console.log(date);
              if (!date) setEndDate(undefined);
              setStartDate(date as Date);
            }}
            showTimeSelect
            /*I put in the className below the text[16px] class for mobiles,
             Because in mobiles when the font size is under the 16px the screen will zoom in when you press on the in inputs*/
            className="bg-transparent w-full outline-none text-[16px]"
            placeholderText="Start Date"
          />
        </InputWithIcon>
        <InputWithIcon
          icon={calender}
          placeHolder="End Date"
          width={20}
          hight={20}
        >
          <DatePicker
            selected={endDate}
            dateFormat="dd/MM/yyyy h:mm a"
            onChange={(date) => {
              console.log(date);
              setEndDate(date as Date);
            }}
            showTimeSelect
            /*I put in the className below the text[16px] class for mobiles,
             Because in mobiles when the font size is under the 16px the screen will zoom in when you press on the in inputs*/
            className={`bg-transparent w-full outline-none text-[16px] ${
              !startDate ? "cursor-not-allowed" : null
            }`}
            placeholderText="End Date"
            disabled={!startDate ? true : false}
          />
        </InputWithIcon>
      </div>
      <div className="wrapper grid gap-5 sm:grid-cols-2">
        <InputWithIcon
          icon={priceIcon}
          typeInput="number"
          width={20}
          hight={20}
          placeHolder="Price"
        >
          <input
            type="number"
            name=""
            id=""
            placeholder="Price"
            className="bg-transparent w-full outline-none text-sm"
          />
          <div className="flex items-center border-2f min-w-30 border-black">
            <span className="text-sm min-w-20 border-2ff border-blackff">
              Free Ticket
            </span>
            <input type="checkbox" name="" id="" />
          </div>
        </InputWithIcon>
        <InputWithIcon icon={urlIcon} width={24} hight={24} placeHolder="URL" />
      </div>
      <Button className="w-full max-w-[15rem] mx-auto rounded-full">
        Create Event
      </Button>
    </div>
  );
};

export default EventForm;
