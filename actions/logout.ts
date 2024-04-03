"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //server things to happen before logout the user
  await signOut();
};
