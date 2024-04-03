"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/public/logos/svgs";
import Link from "next/link";
import links from "@/components/links/Navlinks.json";
import { SearchBar } from "@/components/header/searchbar";
import { HeaderButton } from "@/components/header-button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Sling as Hamburger } from "hamburger-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className=" z-50 flex px-10 sticky bg-[#403582]/50 before:h-full before:w-full before:left-0 before:backdrop-blur-lg before:absolute top-0 justify-between items-center">
      <HoverCard>
        <HoverCardTrigger className="z-50" href="/">
          <Logo className="text-[4rem] antialiased w-full" />
        </HoverCardTrigger>
        <HoverCardContent>На главную</HoverCardContent>
      </HoverCard>

      <div className="flex gap-3">
        <NavigationMenu className="h-fit shadow-inner shadow-black/50 max-md:w-fit max-xl:hidden">
          <NavigationMenuList className="shadow-sm shadow-black/50 rounded-md">
            {links.map((link, index) => (
              <NavigationMenuItem
                key={link.name}
                className="px-1 !mx-0 h-fit py-1"
              >
                <NavigationMenuTrigger className="rounded-md m-0 hover:bg-black text-[0.7vw] h-[2.5rem] px-[.7vw]">
                  <Link key={link.name} href={link.link} className="">
                    {link.rusName}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col backdrop-blur-lg">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.link}
                      className="hover:bg-black px-4 py-2 rounded-md "
                    >
                      {sublink.rusName}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <SearchBar />
      </div>
      <HeaderButton />

      <Collapsible className="sm:hidden">
        <CollapsibleTrigger>
          <Hamburger />
        </CollapsibleTrigger>
        <CollapsibleContent className="absolute z-[100] bg-slate-100 inset-x-0 h-[100vh]">
          Menu
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
