"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { createClientBrowserClient } from "@/lib/supabase/client";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Profiles = {
  id: string;
  name: string;
  email: string;
  is_admin: boolean;
};

import React from "react";

const ToggleAdmin = ({ profile }: { profile: Profiles }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(profile.is_admin);

  const supabase = createClientBrowserClient();

  return (
    <Switch
      id={profile.id}
      checked={isAdmin}
      onChange={async () => {
        console.log("testing");

        const { error } = await supabase
          .from("profiles")
          .update({
            is_admin: isAdmin,
          })
          .eq("id", profile.id);

        if (error)
          toast({
            title: "Error",
            description: (
              <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                {error.message}
              </p>
            ),
            variant: "destructive",
          });
      }}
      onClick={async () => {
        const { data, error } = await supabase
          .from("profiles")
          .update({
            is_admin: !isAdmin,
          })
          .eq("id", profile.id)
          .select("is_admin")
          .order("id", { ascending: true })
          .limit(1)
          .maybeSingle();

        if (error || !data) {
          toast({
            title: "Error",
            description: (
              <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                {error?.message ?? "No data returned"}
              </p>
            ),
            variant: "destructive",
          });

          return;
        }

        setIsAdmin(Boolean(data.is_admin));
      }}
    />
  );
};

export const profilesColumns: ColumnDef<Profiles>[] = [
  {
    id: "fullname",
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="rounded-md"
        >
          Fullname
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="link"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="rounded-md"
      >
        Email
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "is admin",
    accessorKey: "is_admin",
    header: ({ column }) => (
      <Button
        variant="link"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="rounded-md"
      >
        Is Admin
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const profile = row.original;

      return <ToggleAdmin profile={profile} />;
    },
  },
];
