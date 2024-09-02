import { createClientBrowserServer } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import FormTab from "./components/form-tab";
import SectionTitle from "@/components/section-title";
import { Progress } from "@/components/ui/progress";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Internship",
  description: "Internship Application page",
};

export default async function ProtectedPage() {
  const supabase = createClientBrowserServer();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const date = {
    coming: new Date("2024-08-11 00:00:00.000000+07"),
    start: new Date("2024-08-26 07:00:00.000000+07"),
    end: new Date("2024-09-01 23:59:59.000000+07"),
    extendStart: new Date("2024-09-02 10:00:00.000000+07"),
    extendEnd: new Date("2024-09-03 23:59:59.000000+07"),
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

  if (Date.now() > date.end.getTime()) {
    const { count, error } = await supabase
      .from("intern_applications")
      .select("*", { count: "exact", head: true })
      .lte("created_at", "2024-09-01 18:50:48.732058+00");

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (count! > 0) {
      const applicantsCount = await supabase.rpc("get_applicants_count");

      if (applicantsCount.error) {
        return <div>Error: {applicantsCount.error.message}</div>;
      }

      return (
        <main className="container mx-auto py-4 space-y-4">
          <SectionTitle
            title="Closed Registration"
            desc="Thank you for your participation! Now that the registration is closed. For those that have filled our form, you'll be contacted soon. Further information will be provided via WhatsApp Group."
          />
          <h3 className="text-center text-8xl font-semibold">
            {applicantsCount.data} <br />
          </h3>
          <h4 className="text-center text-3xl font-semibold">Registrant</h4>
        </main>
      );
    }

    if (
      Date.now() < date.extendStart.getTime() ||
      Date.now() > date.extendEnd.getTime()
    ) {
      const applicantsCount = await supabase.rpc("get_applicants_count");

      if (applicantsCount.error) {
        return <div>Error: {applicantsCount.error.message}</div>;
      }

      return (
        <main className="container mx-auto py-4 space-y-4">
          <SectionTitle
            title="Closed Registration"
            desc="Thank you for your participation! Now that the registration is closed. For those that have filled our form, you'll be contacted soon. Further information will be provided via WhatsApp Group."
          />
          <h3 className="text-center text-8xl font-semibold">
            {applicantsCount.data} <br />
          </h3>
          <h4 className="text-center text-3xl font-semibold">Registrant</h4>
        </main>
      );
    }
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
              ? ((date.extendStart.getTime() - Date.now()) /
                  (date.extendStart.getTime() - date.extendEnd.getTime())) *
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
