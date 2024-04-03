"use client";
import { Button } from "@/components/ui/button";
import { carouselData } from "@/components/text-data/text-data";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

import React, { useEffect, useState, useTransition } from "react";
import { AddFile } from "@/components/ui/add-file";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { CarouselItemSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { upload } from "@/actions/upload";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { UploadFile } from "@/components/ui/upload-file";

interface EditCarouselProps {
  index: number;
}

export const EditCarousel = (
  { index }: EditCarouselProps,
  values: z.infer<typeof CarouselItemSchema>
) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState("");

  const [removeFile, setRemoveFile] = useState(false);

  const [bigText, setBigText] = useState("");
  const [smallText, setSmallText] = useState("");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const generatePreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
    };
  };

  const form = useForm<z.infer<typeof CarouselItemSchema>>({
    resolver: zodResolver(CarouselItemSchema),
    defaultValues: {
      bigText: "",
      smallText: "",
      img: "",
    },
  });
  useEffect(() => {
    if (file) {
      form.setValue("img", file.name);
    }
    if (removeFile) form.setValue("img", "");
  }, [file]);

  const onSubmit = (values: z.infer<typeof CarouselItemSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      upload(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  const handleUpdateFile = (file: File) => {
    const isValid = file.type === "image/png" || file.type === "image/jpeg";
    if (!isValid) {
      alert("Please upload a valid image file");
      return;
    }
    generatePreview(file);
    setFile(file);
    setRemoveFile(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewURL("");
    setRemoveFile(true);
  };

  const downStyle =
    "!text-gray-500 absolute bg-[#272140] !text-sm left-4 top-4 pointer-events-none translate-x-1 -translate-y-4 text-[1.6875rem] text-white px-2 transition duration-200";

  const inputClass =
    "bg-white text-black focus-within:text-black focus-visible:border-purple-500 disabled:opacity-50 focus-visible:caret-purple-500";

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="bg-[#f9f948] text-[#28224f] hover:bg-[#d0d04c]"
          onClick={() => {
            console.log(carouselData[index]);
          }}
        >
          Редактировать
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-[#ffffff] outline-none border-none">
        <DialogHeader>
          <DialogTitle>Редактировать {index + 1}-й слайд</DialogTitle>
          <DialogDescription>
            Пожалуйста, используйте только картинки с разрешением 16:9 для их
            корректного отображения в слайдере!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="wrapper relative flex flex-col gap-5">
              <FormField
                control={form.control}
                name="bigText"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        name="bigText"
                        outerDiv="relative"
                        upStyle="!text-gray-900"
                        downStyle={downStyle}
                        label="Большой текст"
                        className={inputClass}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="smallText"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        name="smallText"
                        outerDiv="relative"
                        upStyle="!text-gray-900"
                        downStyle={downStyle}
                        label="Малый текст"
                        className={inputClass}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <UploadFile
                handleRemoveFile={handleRemoveFile}
                updateFileUpload={handleUpdateFile}
                file={file}
                previewURL={previewURL}
                removeFile={removeFile}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className="flex w-full gap-2">
              <DialogClose className="w-full">
                <Button
                  type="reset"
                  className="w-full"
                  onClick={() => {
                    console.log("Prikol");
                    setFile(null);
                    setBigText("");
                    setSmallText("");
                  }}
                >
                  Отмена
                </Button>
              </DialogClose>
              <Button className="w-full" type="submit">
                Сохранить
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
