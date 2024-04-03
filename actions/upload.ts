"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { getCarouselItemById } from "@/data/images";

import { CarouselItemSchema } from "@/schemas";

export const upload = async (values: z.infer<typeof CarouselItemSchema>) => {
  const validatedFields = CarouselItemSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { bigText, smallText, img } = validatedFields.data;
  const existingImg = await getCarouselItemById(img);

  const description = [bigText, smallText];

  if (existingImg) {
    return { error: "Image already exists!" };
  }

  await db.carouselItem.create({
    data: { description, img },
  });

  return { success: "Image is uploaded!" };
};
