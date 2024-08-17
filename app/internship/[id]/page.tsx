import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import { InternApplication } from "../components/applicantsColumns";
import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const InternDetailPage = async ({ params }: { params: { id: string } }) => {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) redirect("/login");

  const isAdmin = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", data.user.id)
    .limit(1)
    .single();

  if (isAdmin.error || !Boolean(isAdmin.data.is_admin)) {
    redirect("/internship");
  }

  const internApplication = await supabase
    .from("intern_applications")
    .select(
      "id, profiles:profiles!inner(name, email, avatar, majors:majors!inner(name, alphabet_codes(name), degrees(name, code), faculties(name, alphabet_codes(name))), years:years!inner(name), student_code_id, whatsapp), first:options!biodatas_first_choice_fkey(name), first_reason, second:options!biodatas_second_choice_fkey(name), second_reason, hope, cv_url, twibbon_url, created_at, updated_at"
    )
    .eq("id", params.id)
    .limit(1)
    .maybeSingle<InternApplication>();

  if (internApplication.error || !internApplication.data)
    return <div>Data not found!</div>;

  return (
    <main className="container max-w-3xl mx-auto py-10 space-y-4">
      <div className="flex justify-start space-x-16 mx-auto">
        <Avatar className="h-32 w-32">
          <AvatarImage src={internApplication.data.profiles.avatar} />
          <AvatarFallback className="text-6xl">
            {internApplication.data.profiles.name.split(" ")[0][0]}
            {internApplication.data.profiles.name.split(" ")[
              internApplication.data.profiles.name.split(" ").length - 1
            ][0] ?? ""}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between">
          <h4 className="text-4xl font-bold">
            {internApplication.data.profiles.name}
          </h4>
          <p className="text-sm">
            {internApplication.data.profiles.majors.name} -{" "}
            {internApplication.data.profiles.majors.degrees.name} -{" "}
            {internApplication.data.profiles.majors.faculties.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {
              internApplication.data.profiles.majors.faculties.alphabet_codes
                .name
            }
            {internApplication.data.profiles.majors.degrees.code.toString()}
            {internApplication.data.profiles.majors.alphabet_codes.name}
            {internApplication.data.profiles.years.name
              .toString()
              .padStart(3, "0")}
            {internApplication.data.profiles.student_code_id
              .toString()
              .padStart(3, "0")}
          </p>
          <div className="flex flex-row gap-8">
            <Link
              href={`mailto:${internApplication.data.profiles.email}`}
              className="flex items-center pt-2"
            >
              <MailIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {internApplication.data.profiles.email}
              </span>
            </Link>
            <Link
              href={`https://wa.me/${internApplication.data.profiles.whatsapp}`}
              className="flex items-center pt-2"
            >
              <PhoneIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                +{internApplication.data.profiles.whatsapp}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Separator />
      <div className="space-y-2">
        <h5 className="text-3xl font-bold">Harapan</h5>
        <p className="text-lg">{internApplication.data.hope}</p>
      </div>
      <div className="flex justify-between gap-8">
        <div className="flex-1 space-y-2">
          <h5 className="text-3xl font-bold">
            {internApplication.data.first.name}
          </h5>
          <p className="text-xl">{internApplication.data.first_reason}</p>
        </div>
        <div className="flex-1 space-y-2">
          <h5 className="text-3xl font-bold">
            {internApplication.data.second.name}
          </h5>
          <p className="text-xl">{internApplication.data.second_reason}</p>
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <Link
          href={internApplication.data.cv_url}
          target="_blank"
          className="flex-1 flex"
        >
          <Button variant="default" className="rounded-md flex-1">
            Open CV
          </Button>
        </Link>
        <Link
          href={internApplication.data.twibbon_url}
          target="_blank"
          className="flex-1 flex"
        >
          <Button variant="default" className="rounded-md flex-1">
            Open Twibbon
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default InternDetailPage;
