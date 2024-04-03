import { db } from "@/lib/db";

export const getCarouselItemById = async (id: string) => {
  try {
    const img = await db.carouselItem.findUnique({
      where: { id },
    });
    return img;
  } catch {
    return null;
  }
};
