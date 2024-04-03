import { newPassword } from "@/actions/new-password";
import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.string(),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(7)),
    newPassword: z.optional(z.string().min(7)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(7, {
    message: "Minimum 7 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid credentials!",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(7, {
    message: "Minimum 7 characters required!",
  }),
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  test: z.string().min(1, {
    message: "Test is required!",
  }),
});

export const HeaderButtonSchema = z.object({
  name: z.string().min(1, {
    message: "Invalid name!",
  }),
});

export const CarouselItemSchema = z.object({
  bigText: z.string().min(1, {
    message: "Big text cannot be empty!",
  }),
  smallText: z.string().min(1, {
    message: "Small text cannot be empty!",
  }),
  img: z.string().min(1, {
    message: "Img link cannot be empty!",
  }),
});
