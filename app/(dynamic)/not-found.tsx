import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you're looking for is not available.",
};

const NotFound = () => {
  return (
    <main className="h-full min-h-screen w-full flex flex-col gap-3 justify-center items-center text-center p-4">
      <h1 className="font-bold text-xl">Not found – 404!</h1>
      <p>
        We&apos;re so sorry there must have been a mistake or we are currently
        still working on this feature. <br /> Thank you for your understanding!
        ❤️
      </p>
      <Link href="/">
        <Button variant={"outline"} size={"lg"}>
          Back to Home
        </Button>
      </Link>
    </main>
  );
};

export default NotFound;
