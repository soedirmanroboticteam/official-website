import { createClientBrowserServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import FormTab from "./components/FormTab";
import SectionTitle from "@/components/SectionTitle";
import { Progress } from "@/components/ui/progress";
import {
  applicantsColumns,
  InternApplication,
} from "./components/applicantsColumns";
import { Profiles, profilesColumns } from "./components/profilesColumns";
import {
  ApplicantsChart,
  ApplicantsChartProps,
} from "./components/ApplicantsChart";
import { ApplicantsDataTable } from "./components/ApplicantsDataTable";
import { ProfilesDataTable } from "./components/ProfilesDataTable";

interface FacultyInterface {
  name: string;
}

interface DegreeInterface {
  name: string;
}

interface MajorInterface {
  id: number;
  name: string;
  faculties: FacultyInterface;
  degrees: DegreeInterface;
}

interface YearInterface {
  id: number;
  name: number;
}

interface OptionsInterface {
  id: number;
  name: string;
}

export default async function ProtectedPage() {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const isAdmin = await supabase
    .from("roles")
    .select("is_admin")
    .eq("id", data.user.id)
    .limit(1)
    .single();

  if (isAdmin.error || !Boolean(isAdmin.data.is_admin)) {
    const date = {
      coming: new Date("2024-08-11 00:00:00.000000+07"),
      start: new Date("2024-08-26 07:00:00.000000+07"),
      end: new Date("2024-08-29 00:00:00.000000+07"),
      extend: new Date("2024-08-30 23:59:59.000000+07"),
    };

    if (date.start.getTime() > Date.now()) {
      return (
        <main className="container mx-auto py-4">
          <SectionTitle
            title="Coming Soon"
            desc="Stay tuned at our Instagram @srtunsoed for the latest updates! Don't forget to join our upcoming Open House Events too!"
          />
          <Progress
            value={
              ((date.coming.getTime() - Date.now()) /
                (date.coming.getTime() - date.start.getTime())) *
              100
            }
          />
        </main>
      );
    }

    if (Date.now() > date.extend.getTime()) {
      const count = await supabase.rpc("get_applicants_count");

      if (count.error) {
        return <div>Error: {count.error.message}</div>;
      }

      return (
        <main className="container mx-auto py-4 space-y-4">
          <SectionTitle
            title="Closed Registration"
            desc="Thank you for your participation! Now that the registration is closed. For those that have filled our form, you'll be contacted soon. Further information will be provided there."
          />
          <h3 className="text-center text-8xl font-semibold">
            {count.data} <br />
          </h3>
          <h4 className="text-center text-3xl font-semibold">Registrant</h4>
        </main>
      );
    }

    const [majors, years, options] = await Promise.all([
      supabase
        .from("majors")
        .select("id, name, faculties(name), degrees(name)")
        .order("faculty_id", { ascending: true })
        .returns<MajorInterface[]>(),
      supabase
        .from("years")
        .select("id, name")
        .order("name", { ascending: true })
        .returns<YearInterface[]>(),
      supabase
        .from("options")
        .select("id, name")
        .order("id", { ascending: true })
        .returns<OptionsInterface[]>(),
    ]);

    if (majors.error || years.error || options.error) {
      return (
        <div>
          Error:{" "}
          {majors.error?.message ||
            years.error?.message ||
            options.error?.message}
        </div>
      );
    }

    return (
      <main className="w-full flex flex-col gap-20 items-center justify-center p-4">
        <FormTab
          userId={data.user.id}
          majors={majors.data}
          years={years.data}
          options={options.data}
        />

        <section className="w-full max-w-3xl">
          <Progress
            value={
              Date.now() > date.end.getTime()
                ? ((date.end.getTime() - Date.now()) /
                    (date.end.getTime() - date.extend.getTime())) *
                  100
                : ((date.start.getTime() - Date.now()) /
                    (date.start.getTime() - date.end.getTime())) *
                  100
            }
            className={`${
              Date.now() > date.end.getTime() ? "bg-destructive/50" : ""
            }`}
          />
        </section>
      </main>
    );
  }

  const [internApplications, profiles, faculties, years] = await Promise.all([
    supabase
      .from("intern_applications")
      .select(
        "id, profiles:profiles!inner(name, email, majors:majors!inner(name, alphabet_codes(name), degrees(code), faculties(name, alphabet_codes(name))), years:years!inner(name), student_code_id, whatsapp), first:options!biodatas_first_choice_fkey(id, name), first_reason, second:options!biodatas_second_choice_fkey(id, name), second_reason, hope, cv_url, twibbon_url, created_at, updated_at"
      )
      .order("created_at", { ascending: true })
      .returns<InternApplication[]>(),
    supabase
      .from("profiles")
      .select(
        "id, name, email, roles:roles!inner(is_admin), majors(name, degrees(name), faculties(name)), years(name)"
      )
      .order("name", { ascending: true })
      .returns<Profiles[]>(),
    supabase
      .from("faculties")
      .select("name")
      .order("name", { ascending: true })
      .returns<FacultyInterface[]>(),
    supabase
      .from("years")
      .select("name")
      .order("name", { ascending: true })
      .returns<YearInterface[]>(),
  ]);

  if (
    internApplications.error ||
    profiles.error ||
    faculties.error ||
    years.error
  ) {
    return (
      <div>
        Error:{" "}
        {internApplications.error?.message ||
          profiles.error?.message ||
          faculties.error?.message ||
          years.error?.message}
      </div>
    );
  }

  const chartDatas: ApplicantsChartProps[] = faculties.data.map((item) => {
    return {
      faculty: item.name,
      year: years.data.map((year) => {
        return {
          name: (year.name + 2000).toString(),
          value: internApplications.data.filter(
            (data) =>
              data.profiles.majors.faculties.name == item.name &&
              data.profiles.years.name == year.name
          ).length,
        };
      }),
    };
  });

  return (
    <main className="container mx-auto py-10 space-y-4">
      <ApplicantsChart data={chartDatas} />

      <ApplicantsDataTable
        columns={applicantsColumns}
        data={internApplications.data}
        applicants={internApplications.data}
      />

      <ProfilesDataTable columns={profilesColumns} data={profiles.data} />
    </main>
  );
}
