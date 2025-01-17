"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { LoadingButton } from "@/components/ui/loading-button";
import { createClientBrowserClient } from "@/utils/supabase/client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { logoutClient } from "@/lib/actions/client";
import { redirect } from "next/navigation";
import {
  Degrees,
  Faculties,
  Majors,
  Profiles,
  Years,
} from "@/app/types/global.types";

interface ProfileFormProps {
  userId: string;
  majors: (Majors & { faculties: Faculties; degrees: Degrees })[];
  years: Years[];
  setVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name.",
    })
    .regex(/^[^,]*$/, {
      message: "Please do not use comma in your name.",
    })
    .min(3, { message: "Name must be at least 3 characters." })
    .max(128, { message: "Name must be at most 128 characters." }),
  major_id: z
    .string({
      required_error: "Please select your major.",
    })
    .regex(/\d+/),
  year_id: z
    .string({
      required_error: "Please select your year of enrollment.",
    })
    .regex(/\d+/),
  student_code_id: z
    .string({
      required_error: "Please enter your student id.",
    })
    .regex(/\d+/),
  whatsapp: z
    .string({
      required_error: "Please enter your WhatsApp number.",
    })
    .min(12, { message: "WhatsApp number must be at least 12 characters." })
    .max(14, { message: "WhatsApp number must be at most 14 characters." })
    .regex(/^62\d+/, { message: "Please input a valid WhatsApp number." }),
});

const ProfileForm = ({
  userId,
  majors,
  years,
  setVerified,
}: ProfileFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const supabase = createClientBrowserClient();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    const getProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle<Profiles>();

      if (error) {
        toast({
          title: "Error!",
          description: (
            <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              {error.message}
            </p>
          ),
          variant: "destructive",
        });

        return;
      }

      if (!data) return;

      data.name && form.setValue("name", data.name);

      data.major_id && form.setValue("major_id", data.major_id.toString());

      data.year_id && form.setValue("year_id", data.year_id.toString());

      data.student_code_id &&
        form.setValue("student_code_id", data.student_code_id.toString());

      data.whatsapp && form.setValue("whatsapp", data.whatsapp);

      form.formState.isValid && setVerified(true);
    };

    getProfile();
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);

    const { error } = await supabase.from("profiles").upsert({
      id: userId,
      name: data.name,
      major_id: parseInt(data.major_id),
      year_id: parseInt(data.year_id),
      student_code_id: parseInt(data.student_code_id),
      whatsapp: data.whatsapp,
    });

    if (error) {
      toast({
        title: "Error!",
        description: (
          <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            {error.message}
          </p>
        ),
        variant: "destructive",
      });

      setLoading(false);

      return;
    }

    toast({
      title: "Your changes has been saved successfully!",
      description: (
        <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          Thank you for filling out the application see you on the next stage.
        </p>
      ),
    });

    setLoading(false);

    setVerified(true);

    return;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ex: M. Saujana Shafi Kehaulani"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Input your full name based on your student id card.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="major_id"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Major</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between rounded-md",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? majors.find(
                            (major) => major.id.toString() === field.value
                          )?.name +
                          " - " +
                          majors.find(
                            (major) => major.id.toString() === field.value
                          )?.degrees.name +
                          " - " +
                          majors.find(
                            (major) => major.id.toString() === field.value
                          )?.faculties.name
                        : "Select major"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search major..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No major found.</CommandEmpty>
                      <CommandGroup>
                        {majors.map((major) => (
                          <CommandItem
                            value={
                              major.name +
                              " - " +
                              major.degrees.name +
                              " - " +
                              major.faculties.name
                            }
                            key={major.id}
                            onSelect={() => {
                              form.setValue("major_id", major.id.toString());
                            }}
                          >
                            {major.name +
                              " - " +
                              major.degrees.name +
                              " - " +
                              major.faculties.name}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                major.id.toString() === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select your major, degree, and faculty.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your enrollment year" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem value={year.id.toString()} key={year.id}>
                      {(year.name + 2000).toString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select your enrollment year.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_code_id"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Student Id</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between rounded-md",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? field.value.padStart(3, "0")
                        : "Select your student id number"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search student code id..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No student code id found.</CommandEmpty>
                      <CommandGroup>
                        {Array(500)
                          .fill(0)
                          .map((_, i) => (
                            <CommandItem
                              value={(i + 1).toString().padStart(3, "0")}
                              key={i + 1}
                              onSelect={() => {
                                form.setValue(
                                  "student_code_id",
                                  (i + 1).toString()
                                );
                              }}
                            >
                              {(i + 1).toString().padStart(3, "0")}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  (i + 1).toString() === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select last 3 digit of your student id number/NIM. Ex: H1A021053{" "}
                {"->"} 053.{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp Number</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ex: 6281234567890" {...field} />
              </FormControl>
              <FormDescription>
                Input your active WhatsApp Number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button
            className="rounded-md"
            variant="destructive"
            onClick={async () => {
              await logoutClient();

              redirect("/login");
            }}
          >
            Log Out
          </Button>

          <LoadingButton type="submit" loading={loading}>
            Save & Submit
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
