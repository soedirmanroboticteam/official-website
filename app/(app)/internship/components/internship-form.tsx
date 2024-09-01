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
import { Textarea } from "@/components/ui/textarea";
import { createClientBrowserClient } from "@/utils/supabase/client";
import { LoadingButton } from "@/components/ui/loading-button";
import Link from "next/link";

interface InternshipInterface {
  first_choice: number;
  first_reason: string;
  second_choice: number;
  second_reason: string;
  hope: string;
  cv_url: string;
  twibbon_url: string;
}

interface OptionsInterface {
  id: number;
  name: string;
}

interface InternshipFormProps {
  userId: string;
  options: OptionsInterface[];
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormSchema = z.object({
  first_choice: z
    .string({
      required_error: "Please select your first choice.",
    })
    .regex(/\d+/),
  first_reason: z
    .string({
      required_error: "Please input your motivation for your first choice.",
    })
    .regex(/^[^,]*$/, {
      message: "Please do not use comma in your motivation.",
    })
    .min(24, { message: "Please input at least 24 characters." })
    .max(300, { message: "Please input at most 300 characters." }),
  second_choice: z
    .string({
      required_error: "Please select your second choice.",
    })
    .regex(/\d+/),
  second_reason: z
    .string({
      required_error: "Please input your motivation for your second choice.",
    })
    .regex(/^[^,]*$/, {
      message: "Please do not use comma in your motivation.",
    })
    .min(24, { message: "Please input at least 24 characters." })
    .max(300, { message: "Please input at most 300 characters." }),
  hope: z
    .string({
      required_error:
        "Please input your hope by joining this internship program.",
    })
    .regex(/^[^,]*$/, {
      message: "Please do not use comma in your hope.",
    })
    .min(24, { message: "Please input at least 24 characters." })
    .max(300, { message: "Please input at most 300 characters." }),
  cv_url: z
    .string({
      required_error: "Please enter your CV Url.",
    })
    .regex(/^http[A-Za-z]?:\/\/([A-Za-z]+\.[A-Za-z][A-Za-z]+)[^,]*$/, {
      message: "Please enter a valid URL.",
    })
    .max(128, { message: "Please input URL at most 128 characters." }),
  twibbon_url: z
    .string({
      required_error: "Please enter your Twibbon Url.",
    })
    .regex(/^http[A-Za-z]?:\/\/((www.)?instagram.com\/p\/)[^,]*$/, {
      message: "Please input a valid Instagram Post URL.",
    })
    .max(128, {
      message: "Please input Instagram Post URL at most 128 characters.",
    }),
});

const InternshipForm = ({
  userId,
  options,
  setSubmitted,
}: InternshipFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const supabase = createClientBrowserClient();

  useEffect(() => {
    const getApplication = async () => {
      const { data, error } = await supabase
        .from("intern_applications")
        .select(
          "first_choice, first_reason, second_choice, second_reason, hope, cv_url, twibbon_url"
        )
        .eq("id", userId)
        .maybeSingle<InternshipInterface>();

      if (error) {
        toast({
          title: "Error!",
          description: (
            <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              {error.code}
            </p>
          ),
          variant: "destructive",
        });

        return;
      }

      if (!data) return;

      if (
        data.first_choice &&
        data.first_reason &&
        data.second_choice &&
        data.second_reason &&
        data.hope &&
        data.cv_url &&
        data.twibbon_url
      ) {
        form.setValue("first_choice", data.first_choice.toString());
        form.setValue("first_reason", data.first_reason);
        form.setValue("second_choice", data.second_choice.toString());
        form.setValue("second_reason", data.second_reason);
        form.setValue("hope", data.hope);
        form.setValue("cv_url", data.cv_url);
        form.setValue("twibbon_url", data.twibbon_url);

        setSubmitted(true);
      }
    };

    getApplication();
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);

    const { error } = await supabase.from("intern_applications").upsert({
      id: userId,
      first_choice: parseInt(data.first_choice),
      first_reason: data.first_reason,
      second_choice: parseInt(data.second_choice),
      second_reason: data.second_reason,
      hope: data.hope,
      cv_url: data.cv_url,
      twibbon_url: data.twibbon_url,
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

    setSubmitted(true);

    return;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="first_choice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Choice</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your first choice" />
                </SelectTrigger>
                <SelectContent>
                  {options
                    .filter((item) => item.id !== 5 && item.id !== 2)
                    .map((option) => (
                      <SelectItem value={option.id.toString()} key={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose your first option of division.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="first_reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Choice Motivation</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex: I choose this division because..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You&apos;re free to use any language you feel comfortable with.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="second_choice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Second Choice</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your second choice" />
                </SelectTrigger>
                <SelectContent>
                  {options
                    .filter((item) => item.id !== 5 && item.id !== 2)
                    .map((option) => (
                      <SelectItem value={option.id.toString()} key={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose your second option of division.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="second_reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Second Choice Motivation</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex: I choose this division because..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You&apos;re free to use any language you feel comfortable with.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hope"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hope</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ex: I hope by joining this internship program I will..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please state your hope by joining this internship program.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cv_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CV</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ex: https://drive.google.com/..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please upload your CV to a cloud provider and enter the URL. If
                you still don&apos;t have a CV, you can use this template to
                create one{" "}
                <Link
                  href="https://s.id/CVdanTwibbonOprecInternshipSRT2024"
                  className="text-blue-400 underline"
                >
                  Here.
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="twibbon_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Twibbon</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Ex: https://www.instagram.com/p/..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please enter the URL of your twibbon Instagram post. If you
                still haven&apos;t made a twibbon,{" "}
                <Link
                  href="https://s.id/CVdanTwibbonOprecInternshipSRT2024"
                  className="text-blue-400 underline"
                >
                  Here
                </Link>{" "}
                is the link to the twibbon.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <LoadingButton type="submit" loading={loading}>
            Save & Submit
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default InternshipForm;
