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
import { createClientBrowserClient } from "@/lib/supabase/client";
import { LoadingButton } from "@/components/ui/loading-button";

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
}

const FormSchema = z.object({
  first_choice: z
    .string({
      required_error: "Please select your first choice.",
    })
    .regex(/\d+/),
  first_reason: z.string({
    required_error: "Please input your motivation for your first choice.",
  }),
  second_choice: z
    .string({
      required_error: "Please select your second choice.",
    })
    .regex(/\d+/),
  second_reason: z.string({
    required_error: "Please input your motivation for your second choice.",
  }),
  hope: z.string({
    required_error:
      "Please input your hope by joining this internship program.",
  }),
  cv_url: z
    .string({
      required_error: "Please enter your CV Url.",
    })
    .regex(/http[A-Za-z]?:\/\/([A-Za-z]+\.[A-Za-z][A-Za-z]+)/),
  twibbon_url: z
    .string({
      required_error: "Please enter your Twibbon Url.",
    })
    .regex(/http[A-Za-z]?:\/\/((www.)?instagram.com\/p\/)/),
});

const InternshipForm = ({ userId, options }: InternshipFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const supabase = createClientBrowserClient();

  useEffect(() => {
    async function getApplication() {
      const { data, error } = await supabase
        .from("intern_applications")
        .select(
          "first_choice, first_reason, second_choice, second_reason, hope, cv_url, twibbon_url"
        )
        .eq("id", userId)
        .single<InternshipInterface>();

      if (error) {
        if (error.code === "PGRST116") return;

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

      if (data.first_choice)
        form.setValue("first_choice", data.first_choice.toString());
      if (data.first_choice) form.setValue("first_reason", data.first_reason);
      if (data.first_choice)
        form.setValue("second_choice", data.second_choice.toString());
      if (data.first_choice) form.setValue("second_reason", data.second_reason);
      if (data.first_choice) form.setValue("hope", data.hope);
      if (data.first_choice) form.setValue("cv_url", data.cv_url);
      if (data.first_choice) form.setValue("twibbon_url", data.twibbon_url);
    }

    getApplication();
  }, []);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
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

    return;
  }

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
                  {options.map((option) => (
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
                  {options.map((option) => (
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
                Please upload your CV to a cloud provider and enter the URL.
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
                Please enter the URL of your twibbon Instagram post.
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

export default InternshipForm;