import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";

const InternshipNote = ({ warning }: { warning: string }) => {
  return (
    <Alert variant="default" className="mb-4">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Warning!!!</AlertTitle>
      <AlertDescription dangerouslySetInnerHTML={{ __html: warning }} />
    </Alert>
  );
};

export default InternshipNote;
