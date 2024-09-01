"use client";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { InternApplication } from "./applicants-columns";
import { toast } from "@/components/ui/use-toast";

interface ApplicantsDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  applicants: InternApplication[];
}

export function ApplicantsDataTable<TData, TValue>({
  columns,
  data,
  applicants,
}: ApplicantsDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4 gap-4">
        <Select
          onValueChange={(value) => {
            table.getColumn("First Choice")?.setFilterValue(value);

            table.getColumn("Second Choice")?.setFilterValue(undefined);
          }}
          defaultValue={
            (table.getColumn("First Choice")?.getFilterValue() as string) ??
            undefined
          }
          value={
            (table.getColumn("First Choice")?.getFilterValue() as string) ??
            undefined
          }
        >
          <SelectTrigger className="max-w-xs">
            <SelectValue placeholder="Filter first choice" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Management Team</SelectLabel>
              <SelectItem value="Secretary">Secretary</SelectItem>
              <SelectItem value="Financial Manager">
                Financial Manager
              </SelectItem>
              <SelectItem value="Human Resources & Development (HRD)">
                Human Resources & Development (HRD)
              </SelectItem>
              <SelectItem value="Public Relations (PR)">
                Public Relations (PR)
              </SelectItem>
              <SelectItem value="Creative Media">Creative Media</SelectItem>
              <SelectItem value="Sponsorship">Sponsorship</SelectItem>
              <SelectItem value="Team Manager">Team Manager</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Technical Team</SelectLabel>
              <SelectItem value="Mechanic">Mechanic</SelectItem>
              <SelectItem value="Electronic">Electronic</SelectItem>
              <SelectItem value="Programmer/System">
                Programmer/System
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => {
            table.getColumn("Second Choice")?.setFilterValue(value);

            table.getColumn("First Choice")?.setFilterValue(undefined);
          }}
          defaultValue={
            (table.getColumn("Second Choice")?.getFilterValue() as string) ??
            undefined
          }
          value={
            (table.getColumn("Second Choice")?.getFilterValue() as string) ??
            undefined
          }
        >
          <SelectTrigger className="max-w-xs">
            <SelectValue placeholder="Filter second choice" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Management Team</SelectLabel>
              <SelectItem value="Secretary">Secretary</SelectItem>
              <SelectItem value="Financial Manager">
                Financial Manager
              </SelectItem>
              <SelectItem value="Human Resources & Development (HRD)">
                Human Resources & Development (HRD)
              </SelectItem>
              <SelectItem value="Public Relations (PR)">
                Public Relations (PR)
              </SelectItem>
              <SelectItem value="Creative Media">Creative Media</SelectItem>
              <SelectItem value="Sponsorship">Sponsorship</SelectItem>
              <SelectItem value="Team Manager">Team Manager</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Technical Team</SelectLabel>
              <SelectItem value="Mechanic">Mechanic</SelectItem>
              <SelectItem value="Electronic">Electronic</SelectItem>
              <SelectItem value="Programmer/System">
                Programmer/System
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="rounded-md ml-auto"
          onClick={() => {
            table.getColumn("First Choice")?.setFilterValue(undefined);

            table.getColumn("Second Choice")?.setFilterValue(undefined);
          }}
        >
          Reset filter
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-between items-center px-4">
          <div className="text-sm text-muted-foreground p-4">
            Showing a total of {table.getFilteredRowModel().rows.length}{" "}
            records.
          </div>
          <Button
            className="rounded-md"
            onClick={() => {
              navigator.clipboard.writeText(
                "fullname, email, faculty, major, NIM, whatsapp, first choice, first motivation, second choice, second motivation, hope, CV Url, Twibbon Url, first submit, last edited".concat(
                  "\n",
                  applicants
                    .map(
                      (applicant) =>
                        `${applicant.profiles.name}, ${
                          applicant.profiles.email
                        }, ${applicant.profiles.majors.faculties.name}, ${
                          applicant.profiles.majors.name
                        }, ${
                          applicant.profiles.majors.faculties.alphabet_codes
                            .name +
                          applicant.profiles.majors.degrees.code.toString() +
                          applicant.profiles.majors.alphabet_codes.name +
                          applicant.profiles.years.name
                            .toString()
                            .padStart(3, "0") +
                          applicant.profiles.student_code_id
                            .toString()
                            .padStart(3, "0")
                        }, https://wa.me/${applicant.profiles.whatsapp}, ${
                          applicant.first.name
                        }, ${applicant.first_reason}, ${
                          applicant.second.name
                        }, ${applicant.second_reason}, ${applicant.hope}, ${
                          applicant.cv_url
                        }, ${applicant.twibbon_url}, ${new Date(
                          applicant.created_at
                        ).toLocaleString()}, ${new Date(
                          applicant.updated_at
                        ).toLocaleString()}`
                    )
                    .join("\n")
                )
              );

              toast({
                title: "Success!",
                description: (
                  <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    You can now paste the data from the clipboard.
                  </p>
                ),
              });
            }}
          >
            Copy all data as CSV
          </Button>
        </div>
      </div>
    </div>
  );
}
