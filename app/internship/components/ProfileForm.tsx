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
import { createClientBrowserClient } from "@/lib/supabase/client";

interface ProfileInterface {
  name: string;
  major_id: number;
  year_id: number;
  student_code_id: number;
  whatsapp: string;
}

interface MajorInterface {
  id: number;
  name: string;
  faculties: {
    name: string;
  };
  degrees: {
    name: string;
  };
}

interface YearInterface {
  id: number;
  name: string;
}

interface StudentCodesInterface {
  id: number;
  name: string;
}

interface ProfileFormProps {
  userId: string;
  majors: MajorInterface[];
  years: YearInterface[];
  student_codes: StudentCodesInterface[];
}

const FormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name.",
    })
    .min(3),
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
    .min(12)
    .max(14)
    .regex(/62\d+/),
});

const ProfileForm = ({
  userId,
  majors,
  years,
  student_codes,
}: ProfileFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const supabase = createClientBrowserClient();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    async function getProfile() {
      const { data, error } = await supabase
        .from("profiles")
        .select("name, major_id, year_id, student_code_id, whatsapp")
        .eq("id", userId)
        .single<ProfileInterface>();

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

      form.setValue("name", data.name);

      if (data.major_id) form.setValue("major_id", data.major_id.toString());
      if (data.year_id) form.setValue("year_id", data.year_id.toString());
      if (data.student_code_id)
        form.setValue("student_code_id", data.student_code_id.toString());
      if (data.whatsapp) form.setValue("whatsapp", data.whatsapp);
    }

    getProfile();
  }, []);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
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

    return;
  }

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
            <FormItem>
              <FormLabel>Major</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your major" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {majors.map((major) => (
                    <SelectItem key={major.id} value={major.id.toString()}>
                      {major.name} - {major.degrees.name} -{" "}
                      {major.faculties.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                      {year.name}
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
            <FormItem>
              <FormLabel>Student Id</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your student id number" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {student_codes.map((studentCode) => (
                    <SelectItem
                      value={studentCode.id.toString()}
                      key={studentCode.id}
                    >
                      {studentCode.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Select last 3 digit of your student id number/NIM. Ex: H1A021053{" "}
                {"->"} 053.
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
        <div className="flex justify-end">
          <LoadingButton type="submit" loading={loading}>
            Save
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
