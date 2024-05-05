import { Button } from "@/components/ui/button";
import { loginWithGoogleServer } from "@/lib/actions/server";
import React from "react";

export default function AuthForm() {
  return (
    <form className="flex flex-col gap-2" action={loginWithGoogleServer}>
      <h1 className="text-2xl font-bold">Sign in with Google</h1>
      <p>
        Please use your university Google account <br /> ex.
        example@mhs.unsoed.ac.id
      </p>

      <Button className="w-full font-bold">Google</Button>
    </form>
  );
}
