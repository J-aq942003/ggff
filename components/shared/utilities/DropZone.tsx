"use client";
import { UploadDropzone } from "@uploadthing/react";

import { OurFileRouter } from "../../../app/api/uploadthing/core";
import { cn } from "@/lib/utils";

export const OurUploadDropzone = () => (
  <UploadDropzone<OurFileRouter, "imageUploader">
    endpoint="imageUploader"
    
  />
);
