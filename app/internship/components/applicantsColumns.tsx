"use client";

import { Button } from "@/components/ui/button";
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
    avatar: string;
    majors: {
      name: string;
      alphabet_codes: {
        name: string;
      };
      degrees: {
        name: string;
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
  created_at: string;
  updated_at: string;
};

export const applicantsColumns: ColumnDef<InternApplication>[] = [
  {
    id: "fullname",
    accessorKey: "profiles.name",
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
    id: "First Choice",
    accessorKey: "first.name",
    header: ({ column }) => (
      <Button
        variant="link"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="rounded-md"
      >
        First Choice
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
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
    id: "Second Choice",
    accessorKey: "second.name",
    header: ({ column }) => (
      <Button
        variant="link"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="rounded-md"
      >
        Second Choice
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
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
    id: "Last Edited",
    accessorKey: "updated_at",
    header: ({ column }) => (
      <div className="flex justify-end">
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="rounded-md"
        >
          Last Edited
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex justify-end">
          <HoverCard>
            <HoverCardTrigger>
              <Button variant="link" suppressHydrationWarning>
                {new Date(data.updated_at).toLocaleString()}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <p suppressHydrationWarning>
                First submited: {new Date(data.created_at).toLocaleString()}
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    },
  },
  {
    id: "Actions",
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
                <Link className="flex-1" href={`/dashboard/${data.id}`}>
                  View detail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="flex-1" href={data.cv_url} target="_blank">
                  Open CV
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="flex-1"
                  href={data.twibbon_url}
                  target="_blank"
                >
                  Open Twibbon
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  className="flex-1"
                  href={`https://wa.me/${data.profiles.whatsapp}`}
                >
                  WhatsApp
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="flex-1" href={`mailto:${data.profiles.email}`}>
                  Email
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
