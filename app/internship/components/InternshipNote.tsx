import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const InternshipNote = () => {
  return (
    <Alert variant="default" className="mb-4">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Warning!!!</AlertTitle>
      <AlertDescription>
        If you face any problem regarding this Internship program. Feel free to
        contact our Person In Charge (PIC) via WhatsApp at{" "}
        <Link href="https://wa.me/6285328720087" className="text-blue-400">
          +62 853-2872-0087 (Ikhsan)
        </Link>{" "}
        or{" "}
        <Link href="https://wa.me/6288806900307" className="text-blue-400">
          +62 888-0690-0307 (Zakia)
        </Link>
        . See you at the next stage & Good Luck!
      </AlertDescription>
    </Alert>
  );
};

export default InternshipNote;
