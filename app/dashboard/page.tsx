import { createClientBrowserServer } from "@/lib/supabase/server";
import {
  applicantsColumns,
  InternApplication,
} from "./components/applicantsColumns";
import { ApplicantsDataTable } from "./components/ApplicantsDataTable";
import { redirect } from "next/navigation";
import { ProfilesDataTable } from "./components/ProfilesDataTable";
import { Profiles, profilesColumns } from "./components/profilesColumns";

export default async function DashboardPage() {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const isAdmin = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", data.user.id)
    .limit(1)
    .single();

  if (isAdmin.error || !Boolean(isAdmin.data.is_admin)) {
    redirect("/internship");
  }

  const [internApplications, profiles] = await Promise.all([
    supabase
      .from("intern_applications")
      .select(
        "id, profiles:profiles!inner(name, email, majors:majors!inner(name, alphabet_codes(name), degrees(code), faculties(name, alphabet_codes(name))), years:years!inner(name), student_code_id, whatsapp), first:options!biodatas_first_choice_fkey(id, name), first_reason, second:options!biodatas_second_choice_fkey(id, name), second_reason, hope, cv_url, twibbon_url, created_at, updated_at"
      )
      .order("created_at", { ascending: true })
      .returns<InternApplication[]>(),
    supabase
      .from("profiles")
      .select("id, name, email, is_admin")
      .order("name", { ascending: true })
      .returns<Profiles[]>(),
  ]);

  if (internApplications.error || profiles.error) {
    return (
      <div>
        Error: {internApplications.error?.message || profiles.error?.message}
      </div>
    );
  }

  return (
    <main className="container mx-auto py-10 space-y-4">
      <ApplicantsDataTable
        columns={applicantsColumns}
        data={internApplications.data}
        applicants={internApplications.data}
      />

      <ProfilesDataTable columns={profilesColumns} data={profiles.data} />
    </main>
  );
}
