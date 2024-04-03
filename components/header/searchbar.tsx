"use client";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import * as React from "react";
import { Search } from "lucide-react";
export const SearchBar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command className="w-fit max-xl:w-[50vw] max-md:text-sm z-50 shadow-sm shadow-black/50 max-sm:hidden">
      <div
        className="cursor-pointer max-xl:w-full py-2 px-4 shadow-inner shadow-black/50 flex justify-center"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Search className=" mr-2 h-7 w-7 shrink-0 opacity-100 text-white" />
        <div className="flex justify-between w-full">
          <p className="text-white/80 py-1 pl-2 pr-7 text-base">Поиск...</p>
          <div className="flex">
            <p className="py-1 px-2 bg-slate-900/80 rounded-md text-white">
              Ctrl
            </p>
            <p className="py-1 px-2 bg-slate-900/80 rounded-md text-white">K</p>
          </div>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Command>
  );
};
