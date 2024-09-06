import { Button } from "@/components/ui/button";
import React from "react";

function LogOut() {
  return (
    <form action="/auth/signout" method="POST" className="flex-1 flex">
      <Button variant="destructive" className="flex-1">
        Sign Out
      </Button>
    </form>
  );
}

export default LogOut;
