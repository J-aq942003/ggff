import { UploadDropzone } from "@/lib/uploadthing";
import React from "react";
///////
type FileUploaderProps = {
  imageUrl: string;
  setFiles: () => void; //OR for specification more u can use Dispatch<SetStateAction<File[]>>
};
const FileUploader = ({ imageUrl, setFiles }: FileUploaderProps) => {
  return (
    <>
      <UploadDropzone endpoint="imageUploader" />
    </>
  );
};

export default FileUploader;
