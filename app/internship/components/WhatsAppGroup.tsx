import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import QRCode from "react-qr-code";

const whatsAppGroupLink = "https://chat.whatsapp.com/EJ2GjRnHGGQ7bntrH6K2sl";

const WhatsAppGroup = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className=" flex justify-center items-center bg-white p-4">
        <QRCode value={whatsAppGroupLink} className=" max-w-screen-sm" />
      </div>
      <Link href={whatsAppGroupLink}>
        <Button className="font-bold rounded-md">Join Group</Button>
      </Link>
    </div>
  );
};

export default WhatsAppGroup;
