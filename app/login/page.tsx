import { Button } from "@/components/ui/button";
import { createClientBrowserServer } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { loginWithGoogleServer } from "./actions";

async function page() {
  const supabase = createClientBrowserServer();

  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Login with your @mhs.unsoed.ac.id Google account!
            </p>
          </div>
          <form className="grid gap-4" action={loginWithGoogleServer}>
            <Button variant="default" className="w-full">
              Login with Google
            </Button>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images/login.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default page;
