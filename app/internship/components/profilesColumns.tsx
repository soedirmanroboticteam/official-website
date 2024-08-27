"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
  roles: {
    is_admin: boolean;
  };
  majors: {
    name: string;
    degrees: {
      name: string;
    };
    faculties: {
      name: string;
    };
  } | null;
  years: {
    name: number;
  } | null;
};

import React from "react";

const ToggleAdmin = ({ profile }: { profile: Profiles }) => {
  const supabase = createClientBrowserClient();

  const [isAdmin, setIsAdmin] = useState<boolean>(profile.roles.is_admin);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Switch
      id={profile.id}
      checked={isAdmin}
      onClick={async () => {
        setIsLoading(true);

        const { error } = await supabase
          .from("roles")
          .update({
            is_admin: !isAdmin,
          })
          .eq("id", profile.id);

        if (error) {
          toast({
            title: "Error",
            description: (
              <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                {error.message}
              </p>
            ),
            variant: "destructive",
          });

          return;
        }

        toast({
          title: "Success",
          description: (
            <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              Admin status of {profile.email} has been updated.
            </p>
          ),
          variant: "default",
        });

        setIsAdmin(!isAdmin);

        setIsLoading(false);
      }}
      disabled={isLoading}
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
    cell: ({ row }) => {
      const data = row.original;

      return (
        <HoverCard>
          <HoverCardTrigger>
            <Button variant="link">{data.name}</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Jurusan: {data.majors?.name ?? "-"}</p>
            <p>Fakultas: {data.majors?.faculties.name ?? "-"}</p>
            <p>Angkatan: {((data.years?.name ?? 0) + 2000).toString()}</p>
          </HoverCardContent>
        </HoverCard>
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
    accessorKey: "roles.is_admin",
    header: ({ column }) => (
      <div className="flex justify-end">
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="rounded-md"
        >
          Is Admin
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const profile = row.original;

      return (
        <div className="flex justify-end py-2 px-8">
          <ToggleAdmin profile={profile} />
        </div>
      );
    },
  },
];
