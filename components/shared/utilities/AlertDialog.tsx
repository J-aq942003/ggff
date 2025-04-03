"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { startTransition, useState } from "react";

export function AlertDialogDemo() {
  const [newCategory, setNewCategory] = useState("");
  const addNewCategoryHandler = () => {
    window.location.href = window.location.pathname;
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild className="border-2ff border-blackff m-2">
          <Button variant="outline">+ Add New Category</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>New Category</AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                type="text"
                placeholder="Category Name"
                className="input-field mt-3"
                onChange={(e) => {
                  setNewCategory(e.target.value);
                }}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                // startTransition(addNewCategoryHandler);
                addNewCategoryHandler();
              }}
            >
              Add
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
