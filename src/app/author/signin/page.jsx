"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent as CardBody,
  Input,
  Button,
  Label,
  Form,
} from "@heroui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/Components/Apps/NavbarSection/Logo";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: signinData, error: signinError } =
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

    if (signinError) {
      toast.error(signinError.message);
    } else {
      toast.success("Signup Successfully!");
      redirect("/");
    }
  };

  return (
    <div className="py-15">
      <Card className="w-full max-w-md mx-auto border border-white/5 bg-slate-950/70 backdrop-blur-xl shadow-2xl p-4">
        <CardHeader className="flex flex-col gap-1 items-center pb-6 text-center">
          <Logo />
          <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-white via-slate-100 to-pink-500 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Access your Ticketo account and purchase event tickets.
          </p>
        </CardHeader>
        <CardBody className="gap-4">
          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <Label htmlFor="email">Email Address</Label>
            <Input
              {...register("email", { required: "Email is Required" })}
              id="email"
              placeholder="john@example.com"
              type="email"
              labelPlacement="outside"
              startContent={<FaEnvelope className="text-slate-400 text-sm" />}
              className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:border-pink-500!"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password", { required: "Password is Required" })}
              id="password"
              placeholder="••••••••"
              type="password"
              labelPlacement="outside"
              startContent={<FaLock className="text-slate-400 text-sm" />}
              className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:border-pink-500!"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-linear-to-r from-pink-500 to-indigo-600 text-white font-bold h-12 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20"
              radius="lg"
            >
              Sign In
            </Button>
          </Form>

          <div className="flex items-center my-4">
            <div className="grow border-t border-white/5" />
            <span className="mx-4 text-xs text-slate-500 font-semibold uppercase">
              Or Login With
            </span>
            <div className="grow border-t border-white/5" />
          </div>

          <Button
            variant="bordered"
            className="w-full border-white/10 hover:bg-white/5 hover:border-white/20 text-white font-semibold h-11"
            radius="lg"
            startContent={<FcGoogle className="text-pink-500" />}
          >
            <FcGoogle />
            Google Account
          </Button>

          <p className="text-center text-sm text-slate-400 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/author/signup"
              className="text-pink-500 hover:text-pink-400 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default SigninPage;
