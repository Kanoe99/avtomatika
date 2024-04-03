import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { currentUser } from "@/lib/auth";

import { carouselData } from "@/components/text-data/text-data";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface EditProps {
  welcome: string;
}

export const CarouselLanding = () => {
  return (
    <Carousel className="w-[calc(100%_-_22rem)] max-xl:w-full max-sm:h-fit max-xl:mt-5 max-md:mt-2 max-sm:mt-[2vh]">
      <CarouselContent className="max-md:h-[30rem]  max-sm:h-[50vh]">
        <CarouselItem
          className={`bg-${carouselData[0].background} max-sm:min-h-[40rem] h-[40rem] max-sm:max-h-[50vh]`}
        >
          <h2 className="text-white h-[40rem] max-sm:h-[50vh] p-10 text-5xl bg-black/75 rounded-md max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm">
            {carouselData[0].welcome} <br />{" "}
            <p className="rounded-md text-9xl max-2xl:text-8xl max-xl:text-6xl max-md:text-5xl max-sm:text-2xl">
              {carouselData[0].tech}
            </p>
          </h2>
        </CarouselItem>
        <CarouselItem>
          <h2 className="text-white h-[40rem] p-10 text-5xl bg-black/75 rounded-md max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm">
            Добро пожаловать <br />{" "}
            <p className="rounded-md text-9xl max-2xl:text-8xl max-xl:text-6xl max-md:text-5xl max-sm:text-2xl">
              в Автоматику 2
            </p>
          </h2>
        </CarouselItem>
        <CarouselItem>
          <h2 className="text-white h-[40rem]  p-10 text-5xl bg-black/75 rounded-md max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm">
            Добро пожаловать <br />{" "}
            <p className="rounded-md text-9xl max-2xl:text-8xl max-xl:text-6xl max-md:text-5xl max-sm:text-2xl">
              в Автоматику 3
            </p>
          </h2>
        </CarouselItem>

        {/* do something */}
      </CarouselContent>
    </Carousel>
  );
};
