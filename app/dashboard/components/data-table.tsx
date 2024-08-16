"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
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
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4 gap-4">
        <Select
          onValueChange={(value) =>
            table.getColumn("First Choice")?.setFilterValue(value)
          }
          defaultValue={
            table.getColumn("First Choice")?.getFilterValue() as string
          }
          value={table.getColumn("First Choice")?.getFilterValue() as string}
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
              <SelectItem value="Human Resource Development (HRD)">
                Human Resource Development (HRD)
              </SelectItem>
              <SelectItem value="Public Relation (PR)">
                Public Relation (PR)
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
          onValueChange={(value) =>
            table.getColumn("Second Choice")?.setFilterValue(value)
          }
          defaultValue={
            table.getColumn("Second Choice")?.getFilterValue() as string
          }
          value={table.getColumn("Second Choice")?.getFilterValue() as string}
        >
          <SelectTrigger className="max-w-xs">
            <SelectValue placeholder="Filter second choice" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Management Team</SelectLabel>
              <SelectItem value="1">Secretary</SelectItem>
              <SelectItem value="2">Financial Manager</SelectItem>
              <SelectItem value="3">
                Human Resource Development (HRD)
              </SelectItem>
              <SelectItem value="4">Public Relation (PR)</SelectItem>
              <SelectItem value="5">Creative Media</SelectItem>
              <SelectItem value="6">Sponsorship</SelectItem>
              <SelectItem value="7">Team Manager</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Technical Team</SelectLabel>
              <SelectItem value="8">Mechanic</SelectItem>
              <SelectItem value="9">Electronic</SelectItem>
              <SelectItem value="10">Programmer/System</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="rounded-md ml-auto"
          onClick={() => {
            table.getColumn("First Choice")?.setFilterValue(null);
            table.getColumn("Second Choice")?.setFilterValue(null);
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
        <div className="flex justify-end items-center px-4">
          <div className="text-sm text-muted-foreground p-4">
            Showing a total of {table.getFilteredRowModel().rows.length}{" "}
            records.
          </div>
        </div>
      </div>
    </div>
  );
}
