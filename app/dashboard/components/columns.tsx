"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type InternApplication = {
  id: string;
  profiles: {
    name: string;
    email: string;
    majors: {
      name: string;
      alphabet_codes: {
        name: string;
      };
      degrees: {
        code: number;
      };
      faculties: {
        name: string;
        alphabet_codes: {
          name: string;
        };
      };
    };
    years: {
      name: number;
    };
    student_code_id: number;
    whatsapp: string;
  };
  first: {
    id: number;
    name: string;
  };
  first_reason: string;
  second: {
    id: number;
    name: string;
  };
  second_reason: string;
  hope: string;
  cv_url: string;
  twibbon_url: string;
  updated_at: string;
};

export const columns: ColumnDef<InternApplication>[] = [
  {
    id: "fullname",
    accessorKey: "profiles.name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="rounded-md"
        >
          Name
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const data = row.original;

      return (
        <HoverCard>
          <HoverCardTrigger>
            <Button variant="link">{data.profiles.name}</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Jurusan: {data.profiles.majors.name}</p>
            <p>Angkatan: {(data.profiles.years.name + 2000).toString()}</p>
            <p>Harapan: {data.hope}</p>
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
  {
    id: "first_choice",
    accessorKey: "first.name",
    header: () => <div className="text-left">First Choice</div>,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <HoverCard>
          <HoverCardTrigger>
            <Button variant="link">{data.first.name}</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>{data.first_reason}</p>
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
  {
    id: "second_choice",
    accessorKey: "second.name",
    header: () => <div className="text-left">Second Choice</div>,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <HoverCard>
          <HoverCardTrigger>
            <Button variant="link">{data.second.name}</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>{data.second_reason}</p>
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
  {
    id: "updated_at",
    header: () => <div className="text-right">Date</div>,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="text-right">
          {new Date(data.updated_at).toLocaleDateString()}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0 rounded-md">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(
                    `${data.profiles.name}, ${data.profiles.email}, ${
                      data.profiles.majors.faculties.alphabet_codes.name.toString() +
                      data.profiles.majors.degrees.code.toString() +
                      data.profiles.majors.alphabet_codes.name.toString() +
                      data.profiles.years.name.toString().padStart(3, "0") +
                      data.profiles.student_code_id.toString().padStart(3, "0")
                    }, `
                  )
                }
              >
                Copy as CSV
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={`/dashboard/${data.id}`}>View detail</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={data.cv_url} target="_blank">
                  Open CV
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={data.twibbon_url} target="_blank">
                  Open Twibbon
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={`https://wa.me/${data.profiles.whatsapp}`}>
                  WhatsApp
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`mailto:${data.profiles.email}`}>Email</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
