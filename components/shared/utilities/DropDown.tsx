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
import ICategory from "@/types/category.model";
import { AlertDialogDemo } from "./AlertDialog";
/////////////
type DropDownProps = {
  value?: string;
  onChangeHandler?: () => void;
};
const DropDown = ({ value, onChangeHandler }: DropDownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([
    { _id: "1", name: "Phone" },
    { _id: "2", name: "Laptop" },
    { _id: "3", name: "Mobile" },
  ]);
  const onAddNewCategoryClick = () => {};
  return (
    <>
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field rounded-fullff bg-gray-100ff sm:w-[12rem]ff sm:w-[14rem]ff">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.length > 0 &&
              categories.map((category, index) => {
                return (
                  <SelectItem
                    value={category._id}
                    key={index}
                    className="select-item p-regular-14"
                  >
                    {category.name}
                  </SelectItem>
                );
              })}
            <AlertDialogDemo />
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default DropDown;
