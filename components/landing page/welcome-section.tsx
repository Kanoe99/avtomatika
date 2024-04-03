import { Logo } from "@/components/landing page/logo";
import { CarouselLanding as Carousel } from "@/components/landing page/carousel";
import { Map } from "@/components/map";

const iconSize = 150;
export const Welcome = () => {
  return (
    <div className="flex flex-col justify-between h-fit px-10 gap-5 max-md:px-1 mt-2 max-xl:mt-0 max-xl:items-start">
      <div className="flex gap-3 max-xl:flex-col w-[100%] h-fit items-center top-0 relative justify-between">
        <Carousel />
        <div className="h-[40rem] max-xl:h-fit w-[20rem]  max-xl:w-full max-xl:flex-row max-md:flex-col max-sm:gap-7 gap-5 flex flex-col justify-between">
          <Logo
            link="https://etavtomatika.ru/schedule"
            iconSize={iconSize}
            src="calendar-white.png"
            text="Расписание"
            className="max-sm:h-[37vh]"
          />
          <Logo
            link=""
            iconSize={iconSize}
            src="eye-white.png"
            text="Версия для слабовидящих"
          />
        </div>
      </div>
      <Map />
      <div className="px-10 rounded-md bg-black/70 text-white w-full relative h-[100px] !mt-auto z-10">
        Footer
      </div>
    </div>
  );
};
