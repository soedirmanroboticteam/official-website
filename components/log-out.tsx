"use client";
import { Button } from "@/components/ui/button";
import { createClientBrowserClient } from "@/utils/supabase/client";
import React from "react";

function LogOut() {
  const supabase = createClientBrowserClient();

  async function onLogOut() {
    await supabase.auth.signOut();

    window.location.href = "/login";
  }

  return (
    <Button variant="destructive" onClick={onLogOut}>
      LogOut
    </Button>
  );
}

export default LogOut;
