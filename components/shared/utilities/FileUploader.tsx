import { UploadDropzone } from "@/lib/uploadthing";
import React, { Dispatch, SetStateAction } from "react";
///////
type FileUploaderProps = {
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>> /*() => void;*/; //OR for specification more u can use Dispatch<SetStateAction<File[]>>
};
const FileUploader = ({ imageUrl, setFiles }: FileUploaderProps) => {
  return (
    <>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
        onUploadBegin={(name) => {
          // Do something once upload begins
          console.log("Uploading: ", name);
        }}
        // onDrop={(acceptedFiles) => {
        //   // Do something with the accepted files
        //   // console.log("Accepted files: ", acceptedFiles);
        //   console.log("Im choosed");
        // }}
        onChange={(acceptedFiles) => {
          // window.location.href = "/";// Hhhhhh im joking ^_^
          // setFiles((prev: File[]) => {prev=[...prev,acceptedFiles]});
          console.log("filesss: ");
        }}
        className=" border-2ff border-green-500ff"
      />
    </>
  );
};

export default FileUploader;
