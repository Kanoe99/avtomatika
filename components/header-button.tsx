import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

export const HeaderButton = () => {
  const user = useCurrentUser();

  {
    /* check if I am on auth/login to not display modal
          if I am on mobile do not display Drawer from shadcn-ui
          at the time dispaly modal, later change to drawer */
  }
  return (
    <div className="flex justify-center z-50 shadow-sm shadow-black bg-black/50 rounded-md max-sm:hidden max-md:text-sm">
      <Avatar className="rounded-md !rounded-r-[0px] py-3">
        <AvatarImage src={""} />
        <AvatarFallback className="rounded-md !rounded-r-[0px] bg-transparent flex ">
          <FaUser className="text-[#f9f948] h-[1.25rem] max-md:text-sm" />
        </AvatarFallback>
      </Avatar>
      {user ? (
        <Button
          variant="secondary"
          size="lg"
          className=" w-full !m-0 rounded-l-[0px] max-md:text-sm h-fit px-4 py-3"
        >
          {user.name}
        </Button>
      ) : (
        <LoginButton mode="modal" asChild>
          <Button
            variant="secondary"
            size="lg"
            className=" w-full !m-0 rounded-l-[0px] !max-md:text-sm h-fit px-4 py-3"
          >
            Войти
          </Button>
        </LoginButton>
      )}
    </div>
  );
};
