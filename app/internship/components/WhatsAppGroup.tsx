import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsAppGroup = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src="" alt="" />
      <Link href="https://chat.whatsapp.com/Ft0J83k5bTcJRgIulXrvXZ">
        <Button className="font-bold rounded-md">Join Group</Button>
      </Link>
    </div>
  );
};

export default WhatsAppGroup;
